# Welcome to your Native app 👋


This project is made by using ReactNative, Tailwind for styling and Gluestack UI for the inbuilt components.


I have listed some information below regarding the installation and setup the Tailwind and Gluestack.


Firstly, use npx create-expo-app@latest for creating a React Native Application.

Then, used nativewind to install the tailwind css into the project by using NativeWind, They are two ways to setup tailwind css into the project, Manual and Automation.

For the Automation use this command  npx create-expo-stack@latest --nativewind and give the project name after latest word.

For the Manual setup they are list of the commands and steps should be followed mentioning below,

1. Use npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context for installing the tailwind latest version, reanimated and safe area context.

2. Then use npx tailwindcss init to create a tailwind config.js file in the root of the application.

3. Paste this /** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
in the config file note that ./app is able to use the tailwind if we have any folder that contains the components add them in the content, sp that the tailwind will be applied on the new components.

4. Create a global.cc file in the root and paste this @tailwind base;
@tailwind components;
@tailwind utilities;

5. Create a babel.config.js in the root of the application
and paste this module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };

};

6. Add metro.config.js in the root of the application and paste this
 const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })

7. In the App folder go to the _layouts and import "./global.css"


This are the steps for manual setup of tailwind css in the react native.



##### Gluestack UI Setup


To setup the Gluistack UI in the applications use the gluestack npm create gluestack@latest

This will quickly install all the components to the the application.

This components will be stored in this path 

component/ui/____.

to use the componets in the snippet just import the required component from the local componnets folder.


