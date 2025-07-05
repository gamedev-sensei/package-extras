# @gamedev-sensei/tsdown-config

Provides simple tsdown configuration function `definePackageConfig` that instructs tsdown to:

* build for `cjs` and `esm`
* put build files in the `dist` directory
* start compilation from `src/index.ts` file
* type definitions
* source maps
* prevent node_modules from being bundled

Additionally, you can pass tsdown config to `definePackageConfig` to override parts of config.

## Installation

Yarn:
```bash
yarn add @gamedev-sensei/tsdown-config
```

Npm:
```bash
npm i @gamedev-sensei/tsdown-config
```