module.exports =  {
    parser:  '@typescript-eslint/parser',
    plugins: ["prettier"],
    extends:  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    rules: {
        "prettier/prettier": ["error"]
    },
    settings:  {
        react:  {
            version:  'detect',
        },
    },
};
