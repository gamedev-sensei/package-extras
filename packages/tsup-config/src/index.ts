import {defineConfig, Options} from "tsup";
import alias from "esbuild-plugin-alias"

export type TSupConfig = ReturnType<typeof defineConfig>
export type PackageConfigProps = Options | Options[]
export function definePackageConfig(config: PackageConfigProps = []): TSupConfig {
    const defaultOptions: Options = {
        entry: ['src/index.ts'],
        format: ['esm', 'cjs'],
        dts: true,
        splitting: false,
        sourcemap: true,
        clean: true,
        esbuildPlugins: [
            alias({ "@": "./src" })
        ]
    }

    return defineConfig([ defaultOptions, ...(Array.isArray(config) ? config : [ config ]) ])
}