import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import pin from '~/assets/pin.png';
import { PermissionsAndroid, ToastAndroid } from 'react-native';

const RoundButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <TouchableOpacity style={styles.roundButton} onPress={
            onPress
        } >
        {/* Custom Icon in the Center */}
      <Image
        source={require('~/assets/pin.png')} // Replace with your icon path
        style={styles.icon}
      />
    </TouchableOpacity>
      );
    }
    
const styles = StyleSheet.create({
        roundButton: {
            position: 'absolute',
            bottom: 70, // Distance from the bottom edge of the screen
            right:50,
            alignSelf: 'center', // Centers the button horizontally
            width: 60, // Button width
            height: 60, // Button height
            borderRadius: 30, // Ensures the button remains circular
            backgroundColor: 'black', // Button background color
            justifyContent: 'center', // Centers content vertically
            alignItems: 'center', // Centers content horizontally
            
        },
        icon: {
            
          width: 40, // Adjust icon size
          height: 40,
          resizeMode: 'contain', // Keep the aspect ratio of the icon
        },
});

export default RoundButton;

