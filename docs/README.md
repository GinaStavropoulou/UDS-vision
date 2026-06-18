UDS Vision — simple one-page site

How to preview locally:

```bash
# From the website/ directory
python3 -m http.server 8000
# then open http://localhost:8000
```

Deploy on GitHub Pages:
- Option A: Push `website/` to `gh-pages` branch and enable Pages.
- Option B: Move contents into `docs/` on `main` and enable Pages from `main/docs`.

Files:
- `index.html` — page
- `styles.css` — styles
- `main.js` — small JS for reveal + smooth scroll
- `assets/` — small images and logos
