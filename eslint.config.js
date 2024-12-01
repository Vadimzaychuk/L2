import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.vue', '**/*.js'],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Вимкніть проблемне правило
      'vue/no-unused-vars': 'off',
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
];
