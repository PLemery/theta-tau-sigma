# Theta Tau – Sigma Chapter Website

The website for the Sigma Chapter of Theta Tau at Ohio State (Columbus, OH). It's a plain HTML/CSS/JS site
with no build step, hosted for free on GitHub Pages. Edit a file, push to GitHub, and the site updates in about a minute.

Rebuilt in October 2026 from the old Wix site (`osuthetatau.wixsite.com/website`) after the Wix login was lost.

## Files

```
index.html               ← all page content (text, links, photos)
assets/css/style.css     ← colors, fonts, layout
assets/js/main.js        ← scroll fade-ins, mobile menu, diamond gallery, photo lightbox
assets/img/brand/        ← logos, crest, pillar icons, network logos
assets/img/gallery/      ← photos in the diamond gallery
assets/img/              ← page background (fist & hammers) and rush house photo
assets/video/            ← About-section background video + still poster
```

## Common updates

| To change… | Do this |
|---|---|
| **Rush sign-up form** | In `index.html`, search for `RUSH SIGN-UP FORM` and replace the link (it's also in the “RUSH” text link just above it, search `1FAIpQLSdNnmB`). |
| **Contact form** | Search `CONTACT FORM` in `index.html` and replace the `href` (currently opens an Instagram DM). |
| **Alumni info form** | Search `ALUMNI FORM` and replace the `href`. |
| **Newsletter** | Put the PDF in `assets/docs/` (e.g. `assets/docs/newsletter-fall-2026.pdf`) and point the Newsletter button's `href` at it. |
| **Gallery photos** | Add a JPG to `assets/img/gallery/` (resize to ~700px wide first) and copy one of the `<li>` lines in the `diamonds` list. The layout adjusts automatically. |
| **Donate links** | In the nav, under `Donate`. |
| **“Updated” date** | In the footer at the bottom of `index.html`. |
| **Colors** | Top of `style.css` (`--red`, `--gold`, etc.). |

Anything with `class="reveal"` fades in when it scrolls into view. Add that class to new content to get the same effect.

## Run it locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Hosting (Render)

The site is hosted for free on [Render](https://render.com) as a static site, configured by `render.yaml`.
Every push to `main` redeploys it automatically (about a minute). Live URL: https://osu-theta-tau.onrender.com

GitHub Pages is intentionally **off** for this repo. Turning it on would publish the site under the
repo owner's personal domain. A custom chapter domain can be added in Render under Settings → Custom Domains.

## Handing off to the next webmaster

Don't lose access again. In the repo, go to **Settings → Collaborators** and add the next webmaster
(or transfer the repo to them) *before* you graduate.

## Credits

- About-section video: “A drill drilling steel” from [Mixkit](https://mixkit.co/free-stock-video/a-drill-drilling-steel-2248/) (Mixkit free license).
- Fonts: Archivo, Raleway, Lato from Google Fonts.
- All photos, logos, and the crest are the chapter's own, carried over from the old site.
