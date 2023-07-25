# React Netive Template ready to code!

This template includes multiple plugins that allow you to code faster, it's ready to start coding.

## :space_invader: React Native Template TypeScript + ESLint + Prettier

<p>
  <a href="https://github.com/react-native-community/react-native-template-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## :arrow_forward: Start using this template:

```sh
npx react-native init MyApp --template @lefrankleal/react-native-template
```
or
```
npx react-native init MyApp --template https://github.com/lefrankleal/react-native-template.git
```

## Linting your code

There are some commands that you can use to lint your JavaScript code:

- Use this command to fix everything that is wrong according the code standar
```sh
yarn lint:fix
```
- Then you can use to check everything is ok with the code standar requirements
```sh
yarn lint
```

## :star: Pre-instaled plugins
This template is not minimalistic, it's armored and ready to start coding with the most profitable plugins including code linting hard type checking.
```json
{
  ...
  "dependencies": {
    "@react-native-material/core": "^1.3.7",
    "@react-navigation/bottom-tabs": "^6.5.2",
    "@react-navigation/drawer": "^6.5.6",
    "@react-navigation/native": "^6.1.1",
    "@tanstack/react-query": "^4.20.9",
    "axios": "^1.2.2",
    "lodash": "^4.17.21",
    "react": "18.2.0",
    "react-hook-form": "^7.41.5",
    "react-native": "0.72.3",
    "react-native-safe-area-context": "^4.4.1",
    "react-native-screens": "^3.18.2",
    "react-native-vector-icons": "^9.2.0",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/eslint-parser": "^7.22.9",
    "@babel/preset-env": "^7.20.0",
    "@babel/preset-react": "^7.22.5",
    "@babel/preset-typescript": "^7.22.5",
    "@babel/runtime": "^7.20.0",
    "@jest/globals": "^29.6.1",
    "@react-native-community/eslint-config": "3.2.0",
    "@react-native/eslint-config": "^0.72.2",
    "@react-native/metro-config": "^0.72.9",
    "@tsconfig/react-native": "^3.0.0",
    "@types/axios": "^0.14.0",
    "@types/jest": "^26.0.23",
    "@types/lodash": "^4.14.191",
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.27",
    "@types/react-native": "^0.72.2",
    "@types/react-test-renderer": "^18.0.0",
    "@typescript-eslint/eslint-plugin": "^5.61.0",
    "@typescript-eslint/parser": "6.1.0",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^29.2.1",
    "babel-plugin-module-resolver": "^4.1.0",
    "commitizen": "^4.3.0",
    "eslint": "^8.45.0",
    "eslint-config-prettier": "8.8.0",
    "eslint-formatter-codeframe": "^7.32.1",
    "eslint-plugin-flowtype": "^8.0.3",
    "eslint-plugin-functional": "^4.4.1",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prefer-arrow": "^1.2.3",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-react": "^7.32.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-native": "^4.0.0",
    "jest": "^29.2.1",
    "jetifier": "^2.0.0",
    "metro-react-native-babel-preset": "0.76.7",
    "prettier": "^3.0.0",
    "react-test-renderer": "18.2.0",
    "typescript": "^4.9.4"
  }
  ...
}
```

## Aliases

If you want to add more aliases just add it to `tsconfig.paths.json` and `babel.config.js`, :warning: **both are required**:warning:.

```json
/* Current paths aliases */
"paths": {
  "@assets/*": ["assets/*"],
  "@components/*": ["components/*"],
  "@config/*": ["config/*"],
  "@context/*": ["context/*"],
  "@screens/*": ["screens/*"],
  "@services/*": ["services/*"],
  "@utils/*": ["utils/*"]
}
```

### Aliases usage:

```js
/* This component should be exported from index.ts file inside the folder src/components */
import { ExampleComponent } from "@components"

/* Or call the component directly from file */
import { ExampleComponent } from "@components/example-component"
```

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.