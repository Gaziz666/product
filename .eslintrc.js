module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:prettier/recommended",
        "plugin:i18next/recommended",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
    },
    plugins: ["react", "prettier", "i18next"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-floating-promises": [2, { ignoreVoid: true }],
        "@typescript-eslint/strict-boolean-expressions": [
            0,
            { allowNullableBoolean: true },
        ],
        "i18next/no-literal-string": ["warn", { markupOnly: true }],
    },
};
