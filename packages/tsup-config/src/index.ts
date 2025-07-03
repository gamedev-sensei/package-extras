import {defineConfig, Options} from "tsup";

export type TSupConfig = ReturnType<typeof defineConfig>
export type PackageConfigProps = Options | Options[]
export function definePackageConfig(config: PackageConfigProps = []): TSupConfig {
    const defaultOptions: Options = {
        entry: ['src/index.ts'],
        format: ['esm', 'cjs'],
        dts: true,
        splitting: false,
        sourcemap: true,
        clean: true
    }

    return defineConfig([ defaultOptions, ...(Array.isArray(config) ? config : [ config ]) ])
}