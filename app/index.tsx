import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import React from "react";
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';
import Map from '~/components/Map'
//import Geolocation from 'react-native-geolocation-service';

export default function Home() {
  
  return (
    <>
    
      <Stack.Screen options={{title: 'Location App'}} />
      <Button title="Request Location Permission" onPress={ async ()=>{
          const Permission = [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, 
          ]
          try{
            const granted = await PermissionsAndroid.requestMultiple(
              Permission,
            );
            if (
              granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED &&
              granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED
            ) {
              ToastAndroid.show("fetching current location", ToastAndroid.LONG)
            } else if(
              granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ||
              granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
            ) {
              ToastAndroid.show("enable location permission", ToastAndroid.LONG)
            } else {
              ToastAndroid.show("enable location permission in setting", ToastAndroid.LONG)

            }
          } catch{

          }
      }}/>

      <Map/>
    </>
  );
}
