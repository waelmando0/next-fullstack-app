1. **.npmrc**
   engine-strict=true

   "engines": {
   "node": ">=14.0.0",
   "yarn": ">=1.22.0",
   "npm": "please-use-yarn"
   },

2. `yarn add _D eslint`
   .eslintrc.json

   ```
   {
       "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
       "globals": {
           "React": "readonly"
       },
       "rules": {
           "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
       }
   }
   ```

   script
   "lint": "next lint"

3. `yarn add -D prettier`
   .prettieignore

   ```
    .yarn
    .next
    dist
    node_modules
   ```

   .prettierrc

   ```
   {
   "trailingComma": "es5",
   "tabWidth": 2,
   "semi": true,
   "singleQuote": true
   }
   ```

   script
   "prettier": "prettier --write ."

4. `yarn add -D husky`

   ### Git Hooks

   - npx husky install
   - npx husky add .husky/pre-commit "yarn lint"
   - npx husky add .husky/pre-push "yarn build"

   script
   "prepare": "husky install"
   <br/>
   Automatically going to install husky to make sure that they all have those pre-commit hooks and pre-push hooks the same as you do

5. `yarn add -D @commitlint/config-conventional @commitlint/cli`
   commitlint.config.js

   ```
    // build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    // ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    // docs: Documentation only changes
    // feat: A new feature
    // fix: A bug fix
    // perf: A code change that improves performance
    // refactor: A code change that neither fixes a bug nor adds a feature
    // style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    // test: Adding missing tests or correcting existing tests

    module.exports = {
    extends: ['@commitlint/config-conventional'],
        rules: {
            'body-leading-blank': [1, 'always'],
            'body-max-line-length': [2, 'always', 100],
            'footer-leading-blank': [1, 'always'],
            'footer-max-line-length': [2, 'always', 100],
            'header-max-length': [2, 'always', 100],
            'scope-case': [2, 'always', 'lower-case'],
            'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
            ],
            'subject-empty': [2, 'never'],
            'subject-full-stop': [2, 'never', '.'],
            'type-case': [2, 'always', 'lower-case'],
            'type-empty': [2, 'never'],
            'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'translation',
                'security',
                'changeset',
            ],
            ],
        },
    };
   ```
