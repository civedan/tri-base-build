# Tri Base Build

Dan's 12-week "Return to Tri" base-phase training dashboard. Static multi-page site (plain HTML,
CSS and JS, no build step) published with GitHub Pages from `civedan/tri-base-build` (`main`).

## Layout
- `index.html`: the main plan and dashboard (weeks, schedule, progress).
- `pages/`: one page per discipline (`swim`, `bike`, `run`, `strength`, `yoga`).
- `data/*-library.js`: workout libraries and `zones.js`. Pages read from these; edit workouts here.
- `shared/`: `theme.css` (styling), `nav.js` (navigation), `storage.js` (state).

## State and testing
- All progress (completed workouts, swaps, rotation logs) lives in the browser's `localStorage`,
  written by `shared/storage.js` as one blob under the key `triathlon-base-build-v1`. Every page
  loads the whole blob and writes the whole blob back, so change fields carefully and keep the
  key and shape stable, or existing progress is lost.
- `localStorage` is per origin. Opening files via `file://` gives each page its own origin, so
  nothing syncs. Preview over http: `python3 -m http.server 8743`, then open
  http://localhost:8743. That origin is separate from the live GitHub Pages site, so local testing
  never touches the data Dan has on the live site.

## Git
- History so far is a single commit on `main`. Use a branch for each change and open a PR, since
  `main` is what GitHub Pages publishes.
- Remote uses SSH (`git@github.com:civedan/tri-base-build.git`). Never put a token in the remote
  URL.
