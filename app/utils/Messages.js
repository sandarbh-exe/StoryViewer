import { ToastAndroid } from "react-native";

export const showToastMessage = (message, duration = 3000) => {
    ToastAndroid.showWithGravity(message, duration, ToastAndroid.BOTTOM);
}