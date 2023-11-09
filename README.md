# g_shoes_revamped

Revamped version of the [Gshoes](https://github.com/lonhattan007/gshoes) shopping app for sneaker heads.
Simple shopping cart demonstration built with Flutter web and BloC.

## Installation and Local deployment

### Prerequisites:
- Flutter 3+ and Dart, follow [Flutter's official installation guide](https://docs.flutter.dev/get-started/install)
- The project is web-based, so it's best to have a Chromium-based browser
- Clone this repo:
  ```bash
  git clone git@github.com:lonhattan007/g_shoes_revamped.git
  cd g_shoes_revamped
  ```

### Install dependencies:
```bash
flutter pub get
```

### Run the program:
- Start the application in release mode:
  ```bash
  flutter run --release
  ```
- Choose your favorite web browser from the terminal


## Project structure

This project uses BloC as the state management pattern and it has only one domain module, so the simple structure would be

```
g_shoes_revamped/
|__ assets/
|   |__ fonts/ ............................ - Font ttf files
|   |__ images/ ........................... - Images and icons
|__ data/ ................................. - Mock data
|__ lib/
|   |__ bloc/ ............................. - BloC-related classes
|   |__ components/ ....................... - UI components
|   |__ models/ ........................... - Data models
|   |__ screens/ .......................... - Screen-level components
|   |__ themes/ ........................... - Theme configs
|   |__ utils/ ............................ - Utilities
|   |__ main.dart ......................... - App entry
|__ web/
|__ |__ index.html ........................ - HTML shell for the application
|__ |__ ...
|__ pubspec.yaml .......................... - Project config file
|__ README.md ............................. - Documentation file
|__ .git/ ................................. - Git-related files
|__ ... other standard Flutter project files and directories
```

## Goal checklist

- [ ] Styling
  - [x] Font (Rubik)
  - [x] Colors
  - [x] Images & icons
  - [x] Layout
  - [ ] Decorations (May use Canvas, Stack,...) - Working on it
- [x] Workable
  - [x] Display correct data
  - [x] Add item to cart
  - [x] Remove item from cart
  - [x] Update items' quantities
- [x] Meet with tech specs
  - [x] Framework (Flutter 3+, web platform)
  - [x] State management (BloC)
  - [x] README file
- [ ] Nice to have:
  - [ ] Animation
  - [ ] Responsive - Working on it
  - [ ] Caching - Working on it
  - [ ] Deployed