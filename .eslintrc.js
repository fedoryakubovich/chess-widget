module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-anonymous-default-export': ['off', { allowObject: true }],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [{ pattern: 'react', group: 'builtin', position: 'before' }],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react/jsx-no-target-blank': 'off',
    'prettier/prettier': 'error',
  },
};
