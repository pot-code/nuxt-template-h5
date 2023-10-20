module.exports = {
  root: true,
  extends: ['eslint:recommended', '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  ignorePatterns: ['*.config.js', '*.cjs'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-constructor': 'off',
  },
}
