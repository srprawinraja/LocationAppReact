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



#Connecting to your Development Server


##Physical Android & iOS devices

On your physical device, Download the Expo app by Expo Project from either Google Play or Apple App Store.
2. Once installed, you will need to Sign Up for an expo.dev account.

3. After you are signed in, open your Camera App and scan the QR code from your Expo CLI Terminal (from running npx expo start). It will ask to “Open in Expo Go”


##Android Emulator

1. Download and install Android Studio on your Mac or Windows. We will use this for our Android emulator.
2. Configure Environmental Variables to tell Expo where to your Android SDK is. To find the path, open your Android Studio Settings > Languages & Frameworks > Android SDK > Android ADK Location. Copy this path for the next step.
3. If you are on macOS, add the path pointing to your SDK location into the ~/.bash_profile: export ANDROID_HOME=/your/AndroidSDK/PATH
4. If you are on Windows, go into Windows Control Panel > User Accounts (x2) > Change my environment variables and add:
5. Variable Name: ANDROID_HOME
6. Variable Value: /your/AndroidSDK/PATH
7. Lastly, we need to setup our device to emulate. In Android Studio, click more Actions > Virtual Device Manager > Create Virual Device. Here we can select the Android hardware and OS version to use. I went with the Pixel 8 on Android 14.0 UpsideDownCake.
8. Now back in our Expo CLI Terminal, you should see some options under the QR Code. Press “a” to open Android and it should automatically spin up your Android Emulator running your new App! Will take a few mins to setup android for the first time.


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



