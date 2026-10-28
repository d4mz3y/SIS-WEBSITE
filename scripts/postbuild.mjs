// GitHub Pages has no SPA fallback, so a copy of index.html is served as 404.html.
// Deep links like /about then load the app, which renders the right page.
import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'dist/404.html');
console.log('postbuild: dist/404.html written');
