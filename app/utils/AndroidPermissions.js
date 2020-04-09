import { PermissionsAndroid } from "react-native";

export const checkPermissions = async () => {
    const hasCameraPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    const hasStoragePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

    if (!hasCameraPermission && !hasStoragePermission) {
        return PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]);
    } else if (!hasCameraPermission) {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    } else if (!hasStoragePermission) {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    } else {
        return new Promise.resolve(true);
    }
};