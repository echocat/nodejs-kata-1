import globals from 'globals';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import yml from 'eslint-plugin-yml';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'lib/**', 'prettier.config.js'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: { json, prettier: prettierPlugin },
    language: 'json/json',
  },
  {
    files: ['**/*.md'],
    plugins: { markdown, prettier: prettierPlugin },
    language: 'markdown/commonmark',
  },
  ...yml.configs['flat/recommended'],
  ...yml.configs['flat/prettier'],
  {
    files: ['**/*.{yml,yaml}'],
    plugins: {
      yml,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'yml/no-empty-mapping-value': 'off',
    },
  },
];
