# Pirate Souls Wiki

Public, community-editable wiki for [Pirate Souls](https://piratesouls.com).
Built with [Docusaurus 3](https://docusaurus.io/).

> **Heads up:** most pages here are auto-generated from the live game database
> by tooling that lives in the private game repo. Anything between
> `<!-- AUTOGEN:START -->` and `<!-- AUTOGEN:END -->` will be overwritten on
> the next regeneration. Add your edits **outside** those markers; the
> sections labeled "Notes", "Walkthrough", etc. are yours.

## Editing

Click the **Edit this page** link at the bottom of any article. You'll be
taken to a small form where you enter your **in-game player name** and edit
the markdown. After you submit, a moderator reviews the change as a pull
request; once it's merged, your contribution is recorded against your
player ID.

You do **not** need a GitHub account to contribute.

## Local development

```bash
npm install
npm run start    # http://localhost:3000
npm run build    # static output in build/
```

## Bootstrapping (for maintainers)

This repo is the *output* of the wiki generator. To populate it from a fresh
game DB, see `tools/wiki-generator/README.md` in the private game repo.
