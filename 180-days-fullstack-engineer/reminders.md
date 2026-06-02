# Daily Reminder System

## Architecture Overview

| Component | Responsibility |
|-----------|----------------|
| `.github/workflows/daily-plan-reminder.yml` | Runs the reminder on a cron schedule or manual trigger |
| `scripts/daily_reminder.py` | Calculates the roadmap day, parses the day README, prints the reminder, and optionally sends email |
| `START_DATE` | Defines Day 1 of the 180-day roadmap |
| `ROADMAP_PATH` | Allows the script to parse a different roadmap root when needed |
| SMTP secrets | Enable optional email delivery without storing credentials in the repo |

The workflow reads the daily files under `180-days-fullstack-engineer/week-XX/day-XXX/README.md` and extracts Goal, Topics, Resources, Assignment, Exit Criteria, and Artifact to Commit.

## Workflow Behavior

The workflow runs daily at `06:00 UTC` and can also be run manually from GitHub Actions.

| Step | Behavior |
|------|----------|
| Checkout | Reads the current repository state |
| Python setup | Uses Python 3.12 |
| Day calculation | Calculates the current roadmap day from `START_DATE` |
| Parsing | Loads the matching day README and required sections |
| Logs | Prints the reminder in the Actions log |
| Email | Sends only when all SMTP secrets are configured |

## START_DATE

Set `START_DATE` to the calendar date that should count as Day 1.

```text
START_DATE=2026-06-02
```

If `START_DATE` is missing, the script defaults to Day 1 preview mode and exits successfully. If it is invalid, the script prints a clear error and exits with failure.

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
| Date before `START_DATE` | Prints "not started yet", exits successfully |
| Date after Day 180 | Prints "roadmap is complete", exits successfully |
| Missing day README | Fails with a clear file path |
| Missing required section | Fails with the missing section name |
| Invalid `START_DATE` | Fails with the required date format |
| Invalid `ROADMAP_PATH` | Fails if the path escapes the repository or does not exist |

## Security Notes

- Secrets are read only from environment variables.
- The workflow does not print SMTP values.
- `ROADMAP_PATH` is validated to stay inside the repository.
- Email is optional and never blocks log-based reminders when SMTP is not configured.
