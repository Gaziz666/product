type Mods = Record<string, string | boolean>;

export const cn = (
    cls: string,
    mods: Mods = {},
    additional: string[] | undefined = [],
): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => !!value)
            .map(([className]) => className),
    ].join(" ");
};
