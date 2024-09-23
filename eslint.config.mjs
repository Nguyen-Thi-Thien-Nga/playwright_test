import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    ignores: [".gitignore/"]
}
];
