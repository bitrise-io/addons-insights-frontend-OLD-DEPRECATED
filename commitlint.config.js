module.exports = {
extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0],
    'scope-case': [0, 'always', ['lower-case', 'camel-case', 'pascal-case', 'uppercase']],
    'subject-case': [0],
    'subject-full-stop': [0],
  },
};