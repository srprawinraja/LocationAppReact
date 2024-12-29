import pin from '~/assets/pin.png';
import React, { useState } from 'react';
import Mapbox, {Camera, Images, LocationPuck, MapView, ShapeSource, SymbolLayer} from '@rnmapbox/maps';
import { token } from '~/tokenUtils';
import {featureCollection, point} from '@turf/helpers';
import DirectionButton from '~/components/directionButton'
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import  {Text, StyleSheet} from 'react-native';

const accessToken = token()
Mapbox.setAccessToken(accessToken);

export default function Map() {
    const [coordinates, setCoordinates] = useState<[number, number]|null>(null);
    // Handle the map press event
    const handleMapPress = (event:any) => {
        setCoordinates(event.geometry.coordinates)
        {
        }
    }
    
    return <>
    
    

    <MapView style={styles.map} styleURL='mapbox://styles/mapbox/streets-v12' onPress={handleMapPress}>
        {coordinates && (
            <>

        <Camera followUserLocation/>
        <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{isEnabled: true}}/>
        <ShapeSource
        id="destination"
        shape={featureCollection([point([coordinates[0], coordinates[1]])])}>
        <SymbolLayer id="symbol" style={{
            iconImage:'pin',
            iconAnchor:'bottom'}}/>
        <Images images={{pin}}/>
        </ShapeSource>
        
        </>
      )}
    
        
    </MapView>
    {coordinates && (
        <DirectionButton onPress={
            ()=>{
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