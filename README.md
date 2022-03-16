# expo-detox
Expo @config-plugins/detox example

Building mobile apps in Expo is easy. Testing Expo mobile apps... not so much. 

Until, [@config-plugins/detox](@config-plugins/detox). Thanks, [@evanbacon](https://github.com/evanbacon). Mad Props.

This Expo example uses the `expo-template-tabs` template to demonstrate a single test of react-navigation tabs.

## Usage:

- Clone the repo: `$ git clone git@github.com:tyrauber/expo-detox.git`
- Install the dependencies `$ yarn`
- Prebuild: `$ expo prebuild`
- Run: `$ yarn build:ios`

## Recreate this example

- `$expo init -t expo-template-tabs expo-detox`
  - `cd` into the project
- Install packages:
  - `yarn add -D detox @config-plugins/detox @babel/core @babel/runtime @types/jest babel-jest jest jest-circus ts-jest`
  - touch `tsconfig.json`
  - Run `expo start` to ensure TS is setup correctly.
- Add the following plugin to your `app.json` plugins array (before prebuilding). This'll automatically configure the Android native code to support Detox:
  ```json
  {
    "plugins": ["@config-plugins/detox"]
  }
  ```
- Generate the native code `expo prebuild`
- Run `yarn detox init -r jest`
- [Copy these two bash scripts](https://github.com/expo/config-plugins/tree/main/apps/app/scripts) to ./scripts
  + build-detox-ios.sh 
  + start-metro.sh
- Update your package.json with the appropriate scripts
```
  "build:ios": "detox build -c ios.sim.debug",
  "test:ios": "detox test -c ios.sim.debug",
  "e2e:ios": "npm run build:ios && npm run test:ios",
  "build:ios-release": "detox build -c ios.sim.release",
  "test:ios-release": "detox test -c ios.sim.release",
  "e2e:ios-release": "npm run build:ios-release && npm run test:ios-release",
  "build:android": "detox build -c android.emu.debug",
  "test:android": "detox test -c android.emu.debug",
  "e2e:android": "npm run build:android && npm run test:android",
  "build:android-release": "detox build -c android.emu.release",
  "test:android-release": "detox test -c android.emu.release",
  "e2e:android-release": "npm run build:android-release && npm run test:android-release",
  "clean:android": "pushd android && ./gradlew clean && popd"
```

And profit!