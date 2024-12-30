import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';




const directionButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <TouchableOpacity style={styles.directionButton} onPress={
            onPress
        } >
        {/* Custom Icon in the Center */}
      <Image
        source={require('~/assets/direction.png')} // Replace with your icon path
        style={styles.icon}
      />
    </TouchableOpacity>
      );
    }
    
const styles = StyleSheet.create({
        directionButton: {
          position: 'absolute',
          right:40,
          top:10,
          alignSelf:'flex-end', // Centers the button horizontally
        },
        icon: {
          width: 60, // Adjust icon size
          height: 60,
          resizeMode: 'contain', // Keep the aspect ratio of the icon
        },
});

export default directionButton;

