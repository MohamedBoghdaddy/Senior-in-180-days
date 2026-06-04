# Daily Reminder System

## Architecture Overview

| Component | Responsibility |
|-----------|----------------|
| `.github/workflows/daily-plan-reminder.yml` | Runs the reminder on a cron schedule or manual trigger |
| `scripts/daily_reminder.py` | Calculates the roadmap day, parses the day README, prints the reminder, and optionally sends email |
| `tracker/data/progress.json` | Repo-visible source of truth for Day 1 via `meta.startDate` |
| `START_DATE` | Fallback Day 1 source when `progress.json` has no start date |
| `ROADMAP_PATH` | Allows the script to parse a different roadmap root when needed |
| SMTP secrets | Enable optional email delivery without storing credentials in the repo |

The workflow reads the daily files under `180-days-fullstack-engineer/week-XX/day-XXX/README.md` and extracts Goal, Topics, Resources, Assignment, Exit Criteria, and Artifact to Commit.

## Workflow Behavior

The workflow runs daily at `06:00 UTC` and can also be run manually from GitHub Actions.

| Step | Behavior |
|------|----------|
| Checkout | Reads the current repository state |
| Python setup | Uses Python 3.12 |
| Day calculation | Calculates the current roadmap day from `tracker/data/progress.json` `meta.startDate`, then falls back to `START_DATE` |
| Parsing | Loads the matching day README and required sections |
| Logs | Prints the reminder in the Actions log |
| Email | Sends only when all SMTP secrets are configured |

## Start Date Source

After using the tracker, save the export into `tracker/data/progress.json`. Its `meta.startDate` is the canonical repo-visible Day 1 source for sync, CI, and reminders.

`START_DATE` remains a fallback for previews, manual runs, and cases where `progress.json` has no start date.

```text
START_DATE=2026-06-02
```

If both `progress.json` `meta.startDate` and `START_DATE` are missing, the script defaults to Day 1 preview mode and exits successfully. If the selected date is invalid, the script prints a clear error and exits with failure.

## SMTP Configuration

Set these as GitHub repository secrets:

| Secret | Purpose |
|--------|---------|
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username or sender address |
| `SMTP_PASS` | SMTP password or provider app password |
| `REMINDER_EMAIL_TO` | Destination email address |

For this repository, set `REMINDER_EMAIL_TO` to `mohamedhammad3.142@gmail.com`.

## Manual Run

```bash
START_DATE=2026-06-02 python scripts/daily_reminder.py
```

```bash
START_DATE=2026-06-02 REMINDER_DATE=2026-06-12 python scripts/daily_reminder.py
```

```bash
START_DATE=2026-06-02 ROADMAP_PATH=180-days-fullstack-engineer python scripts/daily_reminder.py
```

## Fallback Behavior

| Scenario | Behavior |
|----------|----------|
| SMTP secrets missing | Prints reminder, skips email, exits successfully |
| Date before selected start date | Prints "not started yet", exits successfully |
| Date after Day 180 | Prints "roadmap is complete", exits successfully |
| Missing day README | Fails with a clear file path |
| Missing required section | Fails with the missing section name |
| Invalid selected start date | Fails with the required date format |
| Invalid `ROADMAP_PATH` | Fails if the path escapes the repository or does not exist |

## Security Notes

- Secrets are read only from environment variables.
- The workflow does not print SMTP values.
- `ROADMAP_PATH` is validated to stay inside the repository.
- Email is optional and never blocks log-based reminders when SMTP is not configured.
