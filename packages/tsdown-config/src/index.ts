import {defineConfig, Options} from "tsdown";

export type TSupConfig = ReturnType<typeof defineConfig>
export type PackageConfigProps = Options | Options[]
export function definePackageConfig(config: PackageConfigProps = []): TSupConfig {
    const defaultOptions: Options = {
        entry: ['src/index.ts', '!src/**/__tests__/**', '!src/**/*.test.*', '!src/**/*.spec.*'],
        format: ['esm', 'cjs'],
        dts: true,
        sourcemap: true,
        clean: true,
        skipNodeModulesBundle: true
    }

    return defineConfig([ defaultOptions, ...(Array.isArray(config) ? config : [ config ]) ])
}