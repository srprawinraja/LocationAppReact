import {Text} from 'react-native';
import Mapbox, {MapView} from '@rnmapbox/maps';
const accessToken = 'sk.eyJ1Ijoic3JwcmF3aW5yYWphIiwiYSI6ImNtNTVxcnlocDJ2cWoyaXNmcDllaDN1Z2MifQ.n8f7sDBpFA0sDVToxzLl7w';
Mapbox.setAccessToken(accessToken);
export default function Map() {
    return <MapView style={{flex:1}}/>;
}