type Mods = Record<string, string | boolean | undefined>;

export const cn = (
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] | undefined = [],
): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => !!value)
            .map(([className]) => className),
    ].join(" ");
};
