# @gamedev-sensei/tsup-config

Provides simple tsup configuration function `definePackageConfig` that instructs tsup to:

* build for `cjs` and `esm`
* put build files in the `dist` directory
* start compilation from `src/index.ts` file
* resolve alias `@` to `src` internally to support `@/something` imports
* type definitions
* source maps

Additionally, you can pass tsup config to `definePackageConfig` to override parts of config.

## Installation

Yarn:
```bash
yarn add @gamedev-sensei/tsup-config
```

Npm:
```bash
npm i @gamedev-sensei/tsup-config
```