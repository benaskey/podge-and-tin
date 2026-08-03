# Podge & Tin Eatery — Website

Static, multi-page rebuild of the Podge & Tin website (independent eatery & bar, Cannock, Staffordshire). Plain HTML/CSS/JS — no build step, no framework.

Design/interaction pattern is borrowed from The Three Tuns (`the3t.co.uk`): a fixed two-tier header, a homepage hero with a word-cycling reveal, and scroll-parallax teaser panels that link out to full dedicated pages.

## Running locally

No build step — just serve the folder and open it in a browser. From this folder:

```
python -m http.server 8080
```

Then visit `http://localhost:8080/index.html`.

## Structure

```
index.html            Home — hero + parallax teaser stack
about.html
book-a-table.html      CTA out to the existing Dojo booking link
takeaway.html
find-us.html            Address, hours, map embed, socials
jobs.html
menu/
  food.html            Full food menu as real text (not images)
  drinks.html
assets/
  css/site.css          Parallax, nav accordion, placeholder styles
  js/                    parallax.js, hero.js, nav.js
  img/                   Site photos (see note below)
```

Colours, fonts and copy come from `podge-and-tin-content-brief.md` (the transcribed old site). Prices/menu items are last-known from that brief, not yet reconfirmed with the client.

## Known outstanding items

- **Photos are placeholder-quality.** Current images in `assets/img/` are small (≈400–800px wide), pulled from the web rather than original camera files — they look stretched/blurry at full-bleed hero size, especially on desktop. Once real photos are available: ask the owner for **original camera/phone files** (ideally 1920px+ wide), not anything downloaded from Instagram/Facebook/Google Images or sent via SMS/WhatsApp (all of which recompress images). Drop replacements into `assets/img/` using the same filenames and they'll slot straight in.
- **Confirm with the client before launch** (per the content brief's own checklist): all menu prices/dish names, side dish prices (illegible on the old site's menu images), full gin list, opening hours, correct social media URLs (Facebook/Instagram/Twitter-X/YouTube), high-res logo + brand hex codes, allergen information, and whether to keep the Dojo booking system.
- No real logo yet — header currently uses styled text ("Podge & Tin"), not the client's actual logo mark.

## Reference material (not part of the live site)

The parent folder also contains `3 tuns breakdown/` — notes and a saved copy of The Three Tuns' homepage HTML, kept purely as a design/technique reference, not to be copied wholesale.
