import {Text} from 'react-native';
import Mapbox, {MapView} from '@rnmapbox/maps';
const accessToken = '';
Mapbox.setAccessToken(accessToken);
export default function Map() {
    return <MapView style={{flex:1}}/>;
}