# CLAUDE.md

Context for Claude Code (and other agent harnesses) working in the
**dr-burns-design-preview** repository.

## Project

This repository is the working space for building a **frontend design for the
Dr. Burns website**. Treat this repo as the primary context for the design work;
pull visual/reference assets from the shared Google Drive folder.

- **Deliverable:** frontend design (UI/markup/styles) for the Dr. Burns site.
- **Assets — Google Drive:** website videos and reference media live in
  <https://drive.google.com/drive/folders/1OqjUctKprWkua-VgV00nh_BNnxNgw_47>
  (subfolder "Videos from the website"). Use the `Google Drive` MCP tools to
  fetch assets when needed.
- **Canonical project repo:** `primo737/drburns` (private — not accessible from
  this session, which is scoped to `franzsamilo/*`). Pull the design
  source-of-truth from there once access is available.

## Skills & context (installed)

This repo enables two Claude Code plugins via [`.claude/settings.json`](.claude/settings.json)
(`extraKnownMarketplaces` + `enabledPlugins`), so their skills, agents, hooks, and
slash commands load in every session opened on this repo (including Claude Code on
the web):

- **ECC** (`ecc@ecc`) — source https://github.com/affaan-m/ecc — 67 agents, 278
  skills, hooks, and rules for TDD, planning, code review, and security workflows.
- **Impeccable** (`impeccable@impeccable`) — source https://github.com/pbakaus/impeccable
  — design fluency for frontend: 1 skill with 23 `/impeccable *` commands (polish,
  audit, critique, distill, animate, bolder, quieter, …) and curated anti-pattern
  detection. This is the primary design-quality layer for the Dr. Burns build.

### First-time activation

External-marketplace plugins load automatically **after** a one-time install on
first trusting the repo. If the skills/commands are not yet visible, run once per
environment:

```
/plugin marketplace add https://github.com/affaan-m/ecc
/plugin install ecc@ecc
/plugin marketplace add https://github.com/pbakaus/impeccable
/plugin install impeccable@impeccable
```

Thereafter the settings above activate both plugins automatically.

> **Impeccable — full CLI extras (optional).** The plugin above bundles the skill +
> 23 commands over GitHub. Impeccable's *live* detector engine and real-browser
> iteration (`npx impeccable install`, `/impeccable init`) additionally fetch from
> `impeccable.style`, which is blocked under **Trusted** network access. To enable
> those, set the environment's network access to **Full** (or **Custom** +
> `impeccable.style`), start a fresh session, then run `npx impeccable install`.

### Key ECC commands

| Command | Purpose |
| --- | --- |
| `/ecc:plan` | Break a task into a research-first implementation plan |
| `/ecc:tdd` | Test-driven development loop |
| `/ecc:code-review` | Structured code review |
| `/ecc:e2e` | End-to-end verification |
| `/ecc:security-review` | Security scan of pending changes |

(Namespace may render as `/ecc:*`; use tab-completion to confirm exact names.)

### Rules (optional manual step)

Claude Code plugins cannot distribute `rules/` automatically. To use ECC's
always-follow language rules, copy the ones you need into your user config:

```
mkdir -p ~/.claude/rules/ecc
# from a local checkout of affaan-m/ecc:
cp -r rules/common ~/.claude/rules/ecc/
cp -r rules/typescript ~/.claude/rules/ecc/   # add other languages as needed
```

Do **not** run ECC's `./install.sh --profile full` after the plugin install —
it duplicates skills and runtime behavior.

## Conventions

- Develop on the designated feature branch; commit with clear messages; push to
  the same branch.
- Do not open a pull request unless explicitly asked.
