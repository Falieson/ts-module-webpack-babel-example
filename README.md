# TS module webpack babel example

This repo will be an example of how to make a Typescript Module to be downloaded from NPM that is transpiled by babel and webpack.

```text
typescript => (webpack + babel) => javascript + type declarations
```

## Trying it out

1) `npm install`
2) `npm run build`

```js
// /package.json
"build": "npm-run-all -s build-clean -p build:*"
"build-clean": "rimraf build"
"build:ts": "webpack -p --config=./webpack.config.js"
"build:types": "tsc  -p tsconfig.types.json"
```

3) `cd ./example/ && npm i`
4) `npm run start`

```js
// /example/package.json
"start": "npm run build && npm run exec"
"build": "webpack -p --config=./webpack.config.js"
"exec": "node dist/index.bundle.js"
```

## HELP: Error

```bash
# node dist/index.bundle.js

ts-module-webpack-babel-example/example on  webpack-project-setup [✘!+?] is 📦 v1.0.0 via ⬢ v12.6.0 took 5s 
➜ npm run start

> examples@1.0.0 start ~/falieson/ts-module-webpack-babel-example/example
> npm run build && npm run exec


> examples@1.0.0 build ~/falieson/ts-module-webpack-babel-example/example
> webpack -p --config=./webpack.config.js

Hash: 037eccc407ef912b8874
Version: webpack 4.41.6
Time: 225ms
Built at: 02/28/2020 8:15:37 AM
          Asset      Size  Chunks             Chunk Names
index.bundle.js  2.04 KiB       0  [emitted]  main
Entrypoint main = index.bundle.js
[0] ../build/index.js 1.07 KiB {0} [built]
[1] ./src/index.js 71 bytes {0} [built]

> examples@1.0.0 exec ~/falieson/ts-module-webpack-babel-example/example
> node dist/index.bundle.js

~/falieson/ts-module-webpack-babel-example/example/dist/index.bundle.js:1
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([funct

TypeError: o(...) is not a function
    at Module.<anonymous> (~/falieson/ts-module-webpack-babel-example/example/dist/index.bundle.js:1:2081)
    at r (~/falieson/ts-module-webpack-babel-example/example/dist/index.bundle.js:1:110)
    at ~/falieson/ts-module-webpack-babel-example/example/dist/index.bundle.js:1:902
    at Object.<anonymous> (~/falieson/ts-module-webpack-babel-example/example/dist/index.bundle.js:1:911)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:839:10)
    at internal/main/run_main_module.js:17:11
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! examples@1.0.0 exec: `node dist/index.bundle.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the examples@1.0.0 exec script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.


```