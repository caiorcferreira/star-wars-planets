# Star Wars Planets

You can find the live application [here](https://caiorcferreira-starwarsplanets.herokuapp.com/)

## Setup and Executation

* yarn install
* yarn start
* yarn test
* yarn serve _(Start Webpack Dev Server)_
* yarn build:prod _(Run Webpack with production flag)_

This project is setup to perform linting and formatting automatically with VSCode Prettier extension and the `prettier-eslint` package.
Note that in order to this work properly, the following settings must be provided for Visual Studio Code.

```json
"editor.formatOnSave": true,
"javascript.format.enable": false,
"prettier.eslintIntegration": true
```

You can also run Prettier and/or ESLint independently through terminal.
