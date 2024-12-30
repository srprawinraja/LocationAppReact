import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import React from "react";
import { ScreenContent } from '~/components/ScreenContent';
import Map from '~/components/Map'
import RoundButton from '~/components/roundButton'
import { PermissionsAndroid, StatusBar, ToastAndroid } from 'react-native';
import {isAllPermissionGiven, isNeverAskAgain} from '~/app/permission'

export default function Home() {
  
  return (
    <>
    
      <Stack.Screen options={{title: 'LocationApp'}} />
      <Map/>

      <RoundButton onPress={
                async ()=>{
                  const Permission = [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION]
                  try{
                    const granted = await PermissionsAndroid.requestMultiple(Permission)
                    if(isAllPermissionGiven(granted)){
                        ToastAndroid.show("fetching the current location", ToastAndroid.LONG)
                    } else {
                      if(isNeverAskAgain(granted)){
                        ToastAndroid.show("Cannot fetch location. Please enable permission in settings", ToastAndroid.LONG)
                      } else {
                        ToastAndroid.show("Cannot fetch location. Please enable permission", ToastAndroid.LONG)
                      }
                    }
                  } catch(event){
                      ToastAndroid.show("Error when asking Permisison", ToastAndroid.LONG)
                  }
              }
              }/>
      
    </>
  );
}