---
name: website-security
description: Use whenever creating, editing, or committing code in this website repo — especially before any git commit/push, before adding a form, API call, backend, database, or third-party integration, or before adding any dependency. Ensures no API keys/secrets ever get committed to the public GitHub repo, .gitignore stays correct, and security controls are applied proportionally to what the site actually is (not a blind enterprise checklist).
---

# Website security baseline — podge-and-tin

This repo is public on GitHub. Nothing in it should ever leak a secret, and
security effort should match what the site actually does — not a generic
enterprise checklist copy-pasted regardless of relevance.

## Always true, no exceptions

1. **Never write a real API key, token, password, or credential directly into
   any tracked file** (HTML, JS, CSS, JSON, README, commit messages). Not even
   temporarily "to test it." If a key is needed client-side, that itself is a
   design problem — see "If a form or API gets added" below.
2. **`.gitignore` must exist and include at minimum:** `.env`, `.env.*`
   (with `!.env.example` allowed), `node_modules/`, build output dirs
   (`dist/`, `build/`), and OS/editor junk. Check it's present and current
   before adding anything that could generate secrets or build artifacts.
3. **Before every commit**, scan the staged diff for things that look like
   secrets (API keys, tokens, connection strings, private keys) — patterns
   like `AIza`, `sk_live`, `sk_test`, long base64/hex blobs assigned to vars
   named `key`/`secret`/`token`/`password`, or `.env` files being staged.
   If anything matches, stop and flag it instead of committing.
4. **If a secret is ever found already committed in git history**, do not
   just delete it going forward — it's still in past commits and must be
   treated as compromised (rotate/revoke it), then flag this to the user
   explicitly. Simply removing the line in a new commit is not enough.

## Apply proportionally — check what's actually in the repo, not what might exist someday

Before recommending or building any control below, verify the relevant
component actually exists in the codebase (grep/read, don't assume). Do not
pre-build controls for components that don't exist yet.

- **A real `<form>` that submits somewhere** (not a `mailto:` link):
  - Needs spam/abuse prevention (honeypot field and/or CAPTCHA like Cloudflare
    Turnstile).
  - Any API key the form submission needs must live server-side (a form
    service like Netlify Forms/Formspree, or a serverless function) —
    never embedded in client-side JS, since anything in the browser is
    public regardless of `.gitignore`.
  - Basic input validation to keep submitted data clean.

- **A `package.json` / dependencies get added:**
  - Keep `node_modules/` out of git (already covered by `.gitignore`).
  - Suggest `npm audit` periodically; don't add dependencies casually.

- **A backend/server (Node, PHP, serverless functions, etc.) gets added:**
  - Input sanitization on anything user-supplied.
  - Rate limiting on any endpoint that accepts input.
  - Secrets loaded from environment variables, never hardcoded.

- **A database gets added:**
  - Credentials via environment variables, least-privilege DB user.
  - Parameterized queries only (no string-concatenated SQL).

- **HTTPS:** verify once the site is deployed to its host (Netlify, Vercel,
  GitHub Pages, etc.) — most hosts do this by default, just confirm it.

## Explicitly do NOT build preemptively

This is a static informational/restaurant site with no accounts, no
database, and no backend today. Do **not** add, scaffold, or recommend the
following unless the user has actually added the component that would make
it relevant (e.g. don't add rate limiting middleware when there is no
server to rate-limit):

auth/roles/permissions, session/token management, multi-tenancy, PII/data
retention policies, GDPR/HIPAA compliance work, audit trails, load/stress
testing, chaos engineering, circuit breakers, disaster recovery plans,
architecture diagrams/ADRs, caching strategy.

If the user asks for one of these, explain what it's for and confirm it's
actually needed before building it — most of this list is backend/SaaS
concerns that don't apply to a static site.
