import {token} from '~/tokenUtils';
export async function getDirection(
    currentLongitude:String,
    currentLatitude:String,
    destinationLongitude:String,
    destinationLatitude:String,
    routingProfile:String,
    alternatives:boolean,
    continue_straight:Boolean,
){  
    const baseUrl='https://api.mapbox.com/directions/v5/mapbox';
    const responce = await fetch(`${baseUrl}/${routingProfile}/${currentLongitude},${currentLatitude};${destinationLongitude},${destinationLatitude}?alternatives=${alternatives}&annotations=duration,distance&continue_straight=${continue_straight}&geometries=geojson&language=en&overview=full&steps=true&access_token=${token()}`);  
    const json = await responce.json();
    return json;
}