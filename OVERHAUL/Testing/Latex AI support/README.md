# LaTeX AI support (single-file app)

Open `Latex AI support.html` in a browser. For the most reliable behavior (ES modules, clipboard, and optional AI `fetch`), serve the folder over HTTP instead of double-clicking `file://`.

## Local server (quick)

From this directory:

```bash
npx --yes serve -l 5173
```

Then visit `http://localhost:5173` and open the HTML file.

PowerShell alternative:

```powershell
py -m http.server 5173
```

## Browser note

Use a current **Chrome**, **Edge**, or **Firefox**. **Safari** generally works but may differ on modules, storage, or clipboard permissions.

## Privacy (summary)

- **AI:** Only your configured API base receives prompts when you click Generate; the API key is sent in the `Authorization` header.
- **CDNs:** KaTeX, MathLive, and MathJax load from `cdn.jsdelivr.net`.
- **Local:** Autosave, settings, and optional export/import JSON stay in the browser unless you copy or download them.

## Multiple tabs

Autosave uses one `localStorage` key per origin. A **banner** can appear when another tab updates autosave; use **Load saved copy** or **Dismiss**. Last successful persist still wins if you ignore the banner.

## URL flags

- `?debug=1` � extra console logging (preview timings, MathJax load, SRI check).
- `?test=1` � run built-in self-checks (see the browser console).

## Changelog (high level)

- **1.3.0** � Central `CONFIG`, bundle schema v2 with `migrateBundle`, cross-tab autosave banner + reload, Web Worker for very large delimiter parses, lazy-loaded symbol categories, native `<dialog>` for table/showcase, optional service worker (CDN cache on https/localhost), `window.latexToolHooks` (`beforeExport` / `afterRender`), paste size limit, expanded `?test=1` checks.
- **1.2.0** � Autosave/restore, JSON export/import, debug bundle copy, SRI on KaTeX, preview race guard, fetch timeout/retry, candidate diff UI, overlay focus trap, keyboard shortcuts, docs in-page + this README.
