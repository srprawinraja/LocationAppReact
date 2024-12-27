# Creating a React Expo Project

### To start building your app with Expo, follow these steps:

---

## 1. Install Node.js

Ensure you have Node.js installed on your system. If not, download and install it from [Node.js](https://nodejs.org/).
## 2. Create an Expo Project

Use `npx` to create a new Expo project. This ensures you always use the latest version of Expo.

	npx create-expo-app MyApp
## 3. Navigate to Your Project Directory
Once the project is created, navigate to its folder:

	cd MyApp


&nbsp;  
&nbsp;  




# Installation and Configuration of @rnmapbox/maps

## Configure credentials
Before installing @rnmapbox/maps you'll need to get the proper credentials. You'll need two tokens:

	Secret access token with (Downloads:Read) scope to download iOS and Android SDK from mapbox. The secret token starts with sk.ey
	Public token to use as accessToken when running the app. The public token starts with pk.ey
See Configure Credential on mapbox.com for details.

	expo install @rnmapbox/maps

## Configure @rnmapbox/maps

Set RNMapboxMapsDownloadToken to your secret token. See the credentials instructions on mapbox.com.

Add RNMapboxMapsDownloadToken to the @rnmapbox/maps config plugin in the plugins array of your app.{json,config.js,config.ts}:

	{
	  "expo": {
		"plugins": [
		  [
	// highlight-start
			"@rnmapbox/maps",
			{
			  "RNMapboxMapsDownloadToken": "sk.ey.."
			}
	// highlight-end
		  ]
		]
	  }
	}

## Rebuild

React Native Mapbox Maps cannot be used in the "Expo Go" app, because it requires custom native code.

Next, if you are not using EAS Build then you must rebuild your app as described in the "Adding custom native code" guide to include the config plugin changes. If this command isn't run, you'll not be able use @rnmapbox/maps.

	expo prebuild --clean


&nbsp;  
&nbsp;  




# Adding Custom Native Code to Your Expo Project Using EAS (Step-by-Step)
This section details how to add custom native code to your Expo project using EAS and run your app with a development build.



## Development Environment:

	Android Studio installed and configured for Android builds.
	Node.js installed.
	EAS Project Configuration: Ensure your Expo project is linked to your Expo account.



## Add Custom Native Code or Libraries
Install a library with native code, for example:


	npm install react-native-awesome-library

## Create a Development Build
To generate a custom build for testing, run:

	eas build --profile development --platform android
This creates a development build that includes your custom native code.

## Install the Development Build
After the build completes, download the APK from the EAS dashboard or the terminal link.

Install the APK on your Android device or emulator using:

## Start the Development Server
Run the development server to connect with your custom build:

	npx expo start
Use the Metro Bundler to reload and debug your app.
Ensure your device is connected to the same network as your computer.



