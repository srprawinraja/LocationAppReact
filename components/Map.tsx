import {Text} from 'react-native';
import {Button} from 'react-native';
import Mapbox, {Camera, LocationPuck, MapView} from '@rnmapbox/maps';
import {token} from 'tokenUtils'
const accessToken = token()
Mapbox.setAccessToken(accessToken);
export default function Map() {
    return <MapView style={{flex:1}} styleURL='mapbox://styles/mapbox/navigation-night-v1'>
        <Camera followUserLocation followZoomLevel={18}/>
        <LocationPuck/>
        <Button title="Request Location Permission" />
    </MapView>;
}