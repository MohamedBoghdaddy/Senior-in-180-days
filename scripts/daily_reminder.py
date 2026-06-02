from __future__ import annotations

import os
import re
import smtplib
import sys
from dataclasses import dataclass
from datetime import date, datetime
from email.message import EmailMessage
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_ROADMAP_PATH = "180-days-fullstack-engineer"
TOTAL_DAYS = 180
REQUIRED_SECTIONS = [
    "Goal",
    "Topics",
    "Resources",
    "Assignment",
    "Exit Criteria",
    "Artifact to Commit",
]


@dataclass(frozen=True)
class PlanDate:
    day: int | None
    status: str
    message: str


def repo_path_from_env() -> Path:
    configured = os.getenv("ROADMAP_PATH", DEFAULT_ROADMAP_PATH).strip()
    if not configured:
        configured = DEFAULT_ROADMAP_PATH
    path = (ROOT / configured).resolve()
    try:
        path.relative_to(ROOT)
    except ValueError as exc:
        raise ValueError("ROADMAP_PATH must resolve inside the repository") from exc
    return path


def today_from_env() -> date:
    override = os.getenv("REMINDER_DATE", "").strip()
    if override:
        return datetime.strptime(override, "%Y-%m-%d").date()
    return date.today()


def calculate_plan_day(today: date) -> PlanDate:
    start = os.getenv("START_DATE", "").strip()
    if not start:
        return PlanDate(
            day=1,
            status="missing_start_date",
            message="START_DATE is not set. Defaulting to Day 1 for preview mode.",
        )

    try:
        start_date = datetime.strptime(start, "%Y-%m-%d").date()
    except ValueError:
        return PlanDate(
            day=None,
            status="invalid_start_date",
            message="START_DATE must use YYYY-MM-DD format. No reminder was sent.",
        )

    offset = (today - start_date).days + 1
    if offset < 1:
        return PlanDate(
            day=None,
            status="before_start",
            message=f"Roadmap has not started yet. START_DATE={start_date.isoformat()}, today={today.isoformat()}.",
        )
    if offset > TOTAL_DAYS:
        return PlanDate(
            day=None,
            status="after_finish",
            message=f"Roadmap is complete. START_DATE={start_date.isoformat()} puts today beyond Day {TOTAL_DAYS}.",
        )
    return PlanDate(day=offset, status="active", message=f"Today is roadmap Day {offset}.")


def day_file_for(roadmap_root: Path, day: int) -> Path:
    week = ((day - 1) // 10) + 1
    return roadmap_root / f"week-{week:02d}" / f"day-{day:02d}" / "README.md"


def extract_section(text: str, heading: str) -> str:
    pattern = rf"^## {re.escape(heading)}\s*\n(.*?)(?=^## |\Z)"
    match = re.search(pattern, text, flags=re.M | re.S)
    return match.group(1).strip() if match else ""


def load_day_plan(roadmap_root: Path, day: int) -> tuple[Path, str, dict[str, str]]:
    path = day_file_for(roadmap_root, day)
    if not path.exists():
        raise FileNotFoundError(f"Roadmap day file not found: {path.relative_to(ROOT)}")

    text = path.read_text(encoding="utf-8")
    title = next((line.removeprefix("# ").strip() for line in text.splitlines() if line.startswith("# ")), f"Day {day:02d}")
    sections = {section: extract_section(text, section) for section in REQUIRED_SECTIONS}
    missing = [name for name, value in sections.items() if not value]
    if missing:
        raise ValueError(f"{path.relative_to(ROOT)} is missing required section(s): {', '.join(missing)}")
    return path, title, sections


def build_message(roadmap_root: Path, plan_date: PlanDate) -> str:
    if plan_date.day is None:
        return "\n".join(
            [
                "Daily Engineering Reminder",
                "",
                "No active roadmap task today.",
                "",
                plan_date.message,
            ]
        )

    path, title, sections = load_day_plan(roadmap_root, plan_date.day)
    body = [
        "Daily Engineering Reminder",
        "",
        title,
        "",
        plan_date.message,
        f"File: {path.relative_to(ROOT).as_posix()}",
        "",
    ]
    for name in REQUIRED_SECTIONS:
        body.extend([f"## {name}", sections[name], ""])
    return "\n".join(body).rstrip()


def smtp_configured() -> bool:
    required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "REMINDER_EMAIL_TO"]
    return all(os.getenv(key, "").strip() for key in required)


def maybe_email(message: str) -> None:
    if not smtp_configured():
        print("SMTP is not fully configured; reminder was printed only.")
        return

    email = EmailMessage()
    email["Subject"] = "Daily 180-Day Engineering Plan"
    email["From"] = os.environ["SMTP_USER"]
    email["To"] = os.environ["REMINDER_EMAIL_TO"]
    email.set_content(message)

    port = int(os.environ["SMTP_PORT"])
    with smtplib.SMTP(os.environ["SMTP_HOST"], port, timeout=30) as server:
        server.starttls()
        server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
        server.send_message(email)
    print("Reminder email sent.")


def main() -> int:
    try:
        roadmap_root = repo_path_from_env()
        if not roadmap_root.exists():
            raise FileNotFoundError(f"ROADMAP_PATH does not exist: {roadmap_root.relative_to(ROOT)}")
        plan_date = calculate_plan_day(today_from_env())
        message = build_message(roadmap_root, plan_date)
        print(message)
        if plan_date.status == "invalid_start_date":
            return 1
        if plan_date.day is not None:
            maybe_email(message)
        return 0
    except Exception as exc:
        print(f"daily_reminder error: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
