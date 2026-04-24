# neevel.org

Public microsite for Neevel — a fall-prevention system placed 2nd at the Stanford Center on Longevity Design Challenge 2026.

Designed by Verônica Vanti and Andrei Vince.

## Structure

```
/               — home
/design/        — a case study by Verônica Vanti
/research/      — the sparse-sensor research track
/press/         — recognition and evidence binder
/contact/       — inquiries
```

## Stack

Static HTML + CSS. No framework, no build step. Deployable to any static host.

## Local preview

```
python3 -m http.server 7777
```

Then open `http://localhost:7777`.

## Deploy

GitHub Pages from `main`. For the custom domain `neevel.org`, add it in **Settings → Pages → Custom domain**, then point DNS at Namecheap to GitHub Pages.
