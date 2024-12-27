import {Text} from 'react-native';
import {Button} from 'react-native';

import Mapbox, {Camera, LocationPuck, MapView} from '@rnmapbox/maps';
const accessToken = '';
Mapbox.setAccessToken(accessToken);
export default function Map() {
    return <MapView style={{flex:1}} styleURL='mapbox://styles/mapbox/dark-v11'>
        <Camera followUserLocation/>
        <LocationPuck/>
    </MapView>;
}