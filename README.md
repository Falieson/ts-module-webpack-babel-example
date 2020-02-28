# TS module webpack babel example

This repo is an example of how to make a Typescript Module to be downloaded from NPM that is transpiled by babel and webpack.

```text
typescript => (webpack + babel) => javascript + type declarations
```

## Try it out

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

### output

```bash
ts-module-webpack-babel-example/example on  webpack-project-setup [✘!+?] is 📦 v1.0.0 via ⬢ v12.6.0 
➜ npm i; npm run start
npm WARN examples@1.0.0 No description
npm WARN examples@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 5289 packages in 2.8s
found 0 vulnerabilities


> examples@1.0.0 start ~/falieson/ts-module-webpack-babel-example/example
> npm run build && npm run exec


> examples@1.0.0 build ~/falieson/ts-module-webpack-babel-example/example
> webpack -p --config=./webpack.config.js

Hash: d368850c567674bd8410
Version: webpack 4.41.6
Time: 228ms
Built at: 02/28/2020 8:33:44 AM
          Asset     Size  Chunks             Chunk Names
index.bundle.js  2.1 KiB       0  [emitted]  main
Entrypoint main = index.bundle.js
[0] ../build/index.js 1.13 KiB {0} [built]
[1] ./src/index.js 71 bytes {0} [built]

> examples@1.0.0 exec ~/falieson/ts-module-webpack-babel-example/example
> node dist/index.bundle.js

{
  hair: true,
  eyes: [ 'green', 'blue' ],
  legs: 4,
  tailLength: 50,
  bodyLength: 70,
  headLength: 10
}
```
