import { PermissionsAndroid, ToastAndroid } from 'react-native';

export function isAllPermissionGiven(granted:any){
        return granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED &&
               granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED
}


export  function isNeverAskAgain(granted:any){

    return  granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN &&
            granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN

}
