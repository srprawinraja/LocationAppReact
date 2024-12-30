import pin from '~/assets/pin.png';
import React, { useState } from 'react';
import Mapbox, {Camera, Images, LocationPuck, MapView, ShapeSource, SymbolLayer, LineLayer} from '@rnmapbox/maps';
import {featureCollection, point} from '@turf/helpers';
import DirectionButton from '~/components/directionButton';
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import  {StyleSheet} from 'react-native';
import {getDirection} from '~/services/direction'
import * as Location from 'expo-location'
import {isAllPermissionGiven, isNeverAskAgain} from '~/app/permission'
import {token} from '~/tokenUtils'

const accessToken = token()
Mapbox.setAccessToken(accessToken);

export default function Map() {
    const [destinationCoordinates, setDestinationCoordinates] = useState<[number, number]|null>(null);
    const [currentCoordinates, setcurrentCoordinates] = useState<[number, number]|null>(null);

    const [coordinates, setcoordinates] = useState(null);
    
    // Handle the map press event
    const handleMapPress = (event:any) => {
        setDestinationCoordinates(event.geometry.coordinates)
    }
    return <>
            <MapView style={styles.map} styleURL='mapbox://styles/mapbox/streets-v12' onPress={handleMapPress}>
            <Camera followUserLocation followZoomLevel={16}/>
            <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{isEnabled: true}}/>
            {destinationCoordinates && (
                <>
            
                    <ShapeSource
                        id="destination"
                        shape={featureCollection([point([destinationCoordinates[0], destinationCoordinates[1]])])}>
                        <SymbolLayer id="symbol" style={{
                            iconImage:'pin',
                            iconAnchor:'bottom'}}/>
                            <Images images={{pin}}/>
                        </ShapeSource>    
    
            </>
            )}
            {coordinates &&  (
                <>
                    <ShapeSource 
                id="routeSource" 
                lineMetrics 
                shape={{
                    properties: {}, 
                    type: 'Feature', 
                    geometry: { 
                        type: 'LineString', 
                        coordinates: coordinates,
                    }, 

                }}>

                    <LineLayer
                        id="exampleLineLayer"
                        style={{
                            lineColor: '#1c96c5', 
                            lineJoin: 'round',
                            lineWidth: 7, 
                        }} />

            </ShapeSource>
                </>

            )

            }
            

            
            </MapView>
                    {destinationCoordinates &&  (
                        <DirectionButton onPress={

                            async ()=>{
                                const Permission = [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION]
                                    try{
                                        const granted = await PermissionsAndroid.requestMultiple(Permission)
                                        if(isAllPermissionGiven(granted)){
                                            const coordinates = await Location.getCurrentPositionAsync({
                                                accuracy: Location.Accuracy.High
                                            });
                                            setcurrentCoordinates([coordinates.coords.longitude, coordinates.coords.latitude])
                                            if(currentCoordinates && destinationCoordinates){
                                                console.log(`current location ${currentCoordinates[0].toString()} ${currentCoordinates[1].toString()}`)
                                                console.log(`destination location ${destinationCoordinates[0].toString()} ${destinationCoordinates[1].toString()}`)
                                                const { coords } = await Location.getCurrentPositionAsync({
                                                    accuracy: Location.Accuracy.High, // Use high accuracy
                                                  });
                                                
                                                    const coordinates=await getDirection(
                                                        currentCoordinates[0].toString(),
                                                        currentCoordinates[1].toString(),
                                                        destinationCoordinates[0].toString(),
                                                        destinationCoordinates[1].toString(),
                                                        "walking",
                                                        false,
                                                        true
                                                    )
                                                    ToastAndroid.show("routing", ToastAndroid.LONG)
                                                    setcoordinates(coordinates?.routes?.[0]?.geometry.coordinates)


                                            } else {
                                                console.log("null error")
                                            }
                                        } else {
                                            if(isNeverAskAgain(granted)){
                                                    ToastAndroid.show("Cannot fetch location. Please enable permission in settings", ToastAndroid.LONG)
                                            } else {
                                                ToastAndroid.show("Cannot fetch location. Please enable permission.", ToastAndroid.LONG)
                                            }
                                        }
                                    } catch(event){
                                                  ToastAndroid.show("Error when asking Permisison", ToastAndroid.LONG)
                                              }
                                          }



                        }/>
                )} 
    
    
        </>
    
}

const styles = StyleSheet.create({
    map: {
        flex:1
        
    }
});


