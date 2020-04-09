import { Platform } from "react-native";

export const Colors = {
    colorPrimary: '#FFB923',
    statusViewed: '#7C6B7C',
    statusNew: '#FFB923',
    statusNone: 'transparent',
    progressDisplay: '#00CC66'
}

export const defaultProfilePictureUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png';

export const isAndroid = Platform.OS === 'android';