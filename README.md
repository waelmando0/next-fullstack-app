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
