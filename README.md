# g_shoes_revamped

Revamped version of the [Gshoes](https://github.com/lonhattan007/gshoes) shopping app for sneaker heads.
Simple shopping cart demonstration built with React and Vite.

## Installation and Local deployment

### Prerequisites:
- Node.js, installation through `nvm` is recommended
- `Yarn` - the package manager used during development and through out the guideline, any other Node.js's package manager also works
- The project is web-based, so it's best to have a Chromium-based browser
- Clone this repo:
  ```bash
  git clone git@github.com:lonhattan007/g_shoes_revamped.git
  cd g_shoes_revamped
  ```

### Install dependencies:
```bash
yarn
```

### Run the program:
- Start the application in release mode:
  ```bash
  yarn dev
  ```
- Press `o + Enter` from the terminal to open the application in your default browser

- or click the link on the terminal.


## Project structure

This project uses BloC as the state management pattern and it has only one domain module, so the simple structure would be

```
g_shoes_revamped/
|__ assets/
|   |__ fonts/ ............................ - Font ttf files
|   |__ images/ ........................... - Images and icons
|__ data/ ................................. - Mock data
|__ src/
|   |__ bloc/ ............................. - BloC-related classes
|   |__ components/ ....................... - UI components
|   |__ models/ ........................... - Data models
|   |__ screens/ .......................... - Screen-level components
|   |__ themes/ ........................... - Theme configs
|   |__ utils/ ............................ - Utilities
|   |__ main.dart ......................... - App entry
|__ index.html ............................ - HTML shell for the application
|__ |__ ...
|__ package.json .......................... - Project config file
|__ README.md ............................. - Documentation file
|__ .git/ ................................. - Git-related files
|__ ... other config files
```

## Goal checklist

- [ ] Styling
  - [x] Font (Rubik)
  - [x] Colors
  - [x] Images & icons
  - [ ] Layout
  - [ ] Decorations (May use Canvas, Stack,...) - Working on it
- [ ] Workable
  - [ ] Display correct data
  - [ ] Add item to cart
  - [ ] Remove item from cart
  - [ ] Update items' quantities
- [ ] Meet with tech specs
  - [x] Framework (React.js + Vite)
  - [ ] State management (Zustand/useContext)
  - [x] README file
- [ ] Nice to have:
  - [x] Animation
  - [ ] Responsive - Working on it
  - [ ] Caching - Working on it
  - [ ] Deployed

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
