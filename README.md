## Project Setup

```
npx create-next-app --ts nextjs-fullstack-app-template

cd nextjs-fullstack-app-template
```

## Engine Locking

- .nvmrc - Will tell other uses of the project which version of Node is used
- .npmrc - Will tell other users of the project which package manager is used

.nvmrc
`lts/fermium`
<br/>

.npmrc
`engine-strict=true`
<br/>

package.json

```
  "name": "nextjs-fullstack-app-template",
  "author": "YOUR_NAME",
  "description": "A tutorial and template for creating a production-ready fullstack Next.js application",
  "version": "0.1.0",
  "private": true,
  "license" : "MIT"
  "homepage": "YOUR_GIT_REPO_URL"
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
``
```

The **engines** field is where you specify the specific versions of the tools you are using. You can also fill in your personal details if you choose.

## Code Formatting and Quality Tools

- eslint - For best practices on coding standards
- prettier - For automatic formatting of code files

### ESLint

We'll begin with ESLint, which is easy because it automatically comes installed and pre-configured with Next.js projects.
<br/>
`yarn add -D eslint`

<br/>
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

<br/>
You can test out your config by running:

### Prettier

Prettier will take care of automatically formatting our files for us. Let's add it to the project now.
<br/>
`yarn add -D prettier`
<br/>

.prettierrc

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

<br/>
.prettierignore

```
.yarn
.next
dist
node_modules
```

<br/>

package.json

```
  "scripts: {
    "prettier": "prettier --write ."
  }
```

You can now run
`yarn prettier`

## Git Hooks

We are going to implement a tool called Husky
<br/>
Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. We would like to be able to set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.

```
yarn add -D husky
npx husky install
npx husky add .husky/pre-commit "yarn lint"
npx husky add .husky/pre-push "yarn build"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'


```

package.json

```
 "scripts: {
    "prepare": "husky install"
  }
```

<br/>
Lastly we are going to add one more tool. We have been following a standard convention for all our commit messages so far, let's ensure that everyone on the team is following them as well (including ourselves!). We can add a linter for our commit messages:
`yarn add -D @commitlint/config-conventional @commitlint/cli`

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

## VS Code Configuration

.vscode/settings.json

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

Debugging
.vscode/launch.json

```
{
  "version": "0.1.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

<br/>
`yarn add -D cross-env`

package.json

```
{
  "scripts": {
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
  },
}
```

## Directory Structure

- component - The individual UI components that make up the app will live in here
- lib - Business/app/domain logic will live in here.
- pages - Will be the actual routes/pages as per the required Next.js structure.

## Adding Storybook

One of the great modern tools available to us if you aren't already familiar with it is called Storybook.
<br/>
Storybook gives us an environment to show off and test the React components we are building outside of the application we are using them in. It's great tool to connect developers with designers and be able to verify components we have developed look and function as per design requirements in an isolated environment without the overhead of the rest of the app.
`npx sb init --builder webpack5`

.eslintrc.json

```
{
  "extends": [
    "plugin:storybook/recommended",
    "next",
    "next/core-web-vitals",
    "eslint:recommended"
  ],
  "globals": {
    "React": "readonly"
  },
  "overrides": [
    {
      "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      "rules": {
            "storybook/hierarchy-separator": "error"
      }
    }
  ],
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

`yarn install`

<br/>
storybook/main.js
```
module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
```
</br>

storybook/preview.js

```
import '../styles/globals.css';
import * as NextImage from 'next/image';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
```

`yarn storybook`
