import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'], // Ігноруємо node_modules та dist
  },
  {
    files: ['**/*.vue', '**/*.js'], // Лінтинг для .vue і .js файлів
    plugins: {
      vue, // Плагін для Vue
    },
    languageOptions: {
      parser: vueParser, // Парсер для Vue
      parserOptions: {
        ecmaVersion: 'latest', // Сучасна версія ECMAScript
        sourceType: 'module',
      },
    },
    rules: {
      'vue/no-unused-vars': 'warn', // Попередження для невикористаних змінних у Vue
      'no-console': 'warn', // Попередження для console.log
      'no-debugger': 'error', // Заборона debugger
    },
  },
];
