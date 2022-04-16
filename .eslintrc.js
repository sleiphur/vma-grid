const common = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['prettier', 'jest', 'markdown'],
  extends: [
    'airbnb-base',
    'plugin:jest/all',
    'plugin:markdown/recommended', // REF: https://github.com/eslint/eslint-plugin-markdown/blob/main/lib/index.js
    'plugin:vue/vue3-essential',
    '@vue/standard',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/no-test-return-statement': 'off',
    'jest/require-hook': 'off',
    'jest/require-top-level-describe': 'off',
    'jest/no-if': 'off',
    'jest/no-conditional-expect': 'off',
    'jest/no-export': 'off',
    'jest/unbound-method': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'new-cap': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': 'off',
    'no-continue': 'off',
    'no-lonely-if': 'off',
    'no-case-declarations': 'off',
    'default-case': 'off',
    'no-bitwise': 'off',
    'no-return-assign': 'off',
    'no-control-regex': 'off',
    'no-self-compare': 'off',
    'no-multi-assign': 'off',
    'global-require': 'off',
    'no-restricted-globals': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'class-methods-use-this': 'off',
    'prefer-regex-literals': 'off',
    'no-constructor-return': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-useless-call': 'off',
    'vue/no-mutating-props': 'off',
  },
}

module.exports = {
  // ...common,
  root: true,
  overrides: [
    {
      /*
      eslint-plugin-markdown only finds javascript code block snippet.
      For specific spec, refer to https://github.com/eslint/eslint-plugin-markdown
      */
      ...common,
      files: ['**/*.js'],
    },
    {
      /*
      eslint-plugin-markdown only finds javascript code block snippet.
      For specific spec, refer to https://github.com/eslint/eslint-plugin-markdown
      */
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      ...common,
      // In eslint-plugin-markdown v2, configuration for fenced code blocks is separate from the
      // containing Markdown file. Each code block has a virtual filename
      // appended to the Markdown file's path.
      files: ['**/*.md/*.js'],
      // Configuration for fenced code blocks goes with the override for
      // the code block's virtual filename, for example:
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
      rules: {
        ...common.rules,
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      ...common,
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json', // REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
      },
      env: common.env,
      plugins: [...common.plugins, '@typescript-eslint'],
      extends: [
        ...common.extends,
        'airbnb-typescript/base', // "base" does not include tsx rules. REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier', // Let prettier have high priority
      ],
      rules: {
        ...common.rules,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        "@typescript-eslint/unbound-method": "warn"
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
}
