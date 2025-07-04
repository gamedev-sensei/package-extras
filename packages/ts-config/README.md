# @gamedev-sensei/ts-config

Shared typescript config files that you can extend to provide type safety to your packages.

We recommend extending:
* `@gamedev-sensei/ts-config/tsconfig.json` for plain typescript packages
* `@gamedev-sensei/ts-config/react.tsconfig.json` for react 18+ packages

## tsup

Due to bug a bug in the tsup package, `@` alias will not work properly.
You can work around it, by applying the patch below to the tsup@8.5.0:
```
diff --git a/node_modules/tsup/dist/rollup.js b/node_modules/tsup/dist/rollup.js
index 65df1bf..f32a5d5 100644
--- a/node_modules/tsup/dist/rollup.js
+++ b/node_modules/tsup/dist/rollup.js
@@ -6717,7 +6717,7 @@ var parseCompilerOptions = (compilerOptions) => {
   const { options } = _typescript2.default.parseJsonConfigFileContent(
     { compilerOptions },
     _typescript2.default.sys,
-    "./"
+    _path2.default.resolve("./")
   );
   return options;
 };

```

## Installation

Yarn:
```bash
yarn add @gamedev-sensei/ts-config
```

Npm:
```bash
npm i @gamedev-sensei/ts-config
```