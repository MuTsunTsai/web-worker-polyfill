
# web-worker-polyfill

> Web Worker API polyfill for Node.js

This is inspired by [apacheli/web-workers-polyfill](https://github.com/apacheli/web-workers-polyfill) and I borrowed much of the code from it.

My version runs only in ESM.
The file `main.js` is for the main thread and `worker.js` is for the worker thread.
Import them at the beginning of the entry module and the rest will just work.
If we are in the web environment already, nothing wil be touched.