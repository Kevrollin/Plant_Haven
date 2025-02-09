const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_fa_index_mjs_275a22._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_lib_6322da._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_3a1b1d._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__f262ea._.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_ff5908.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
