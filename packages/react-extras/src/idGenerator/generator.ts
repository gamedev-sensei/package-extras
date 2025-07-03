export type WithId<T extends object> = T extends object ? (T & { id: string }) : never
export type WithoutId<T extends object> = T extends object ? Omit<T, "id"> : never

export const withId = <T extends object>(v: T, id: string) =>
    ({ ...v, id }) as WithId<T>
export const withoutId = <T extends object>({ id, ...v }: WithId<T>) =>
    v as WithoutId<WithId<T>>

export type ArrayWithId<T extends object> = WithId<T>[]
export type ArrayWithoutId<T extends object> = WithoutId<WithId<T>>[]

export const arrayWithIds = <T extends object>(v: T[], idGenerator: () => string): ArrayWithId<T> =>
    v.map(i => withId(i, idGenerator()))
export const arrayWithoutIds = <T extends object>(v: ArrayWithId<T>): ArrayWithoutId<T> =>
    v.map(withoutId)

export function wrapIdGenerator(generator: () => string) {
    return Object.assign(generator, {
        withId<T extends {}>(v: T): WithId<T> {
            return withId(v, generator())
        },
        arrayWithIds<T extends {}>(v: T[]): ArrayWithId<T> {
            return arrayWithIds(v, generator)
        }
    })
}

export type IdGenerator = ReturnType<typeof wrapIdGenerator>