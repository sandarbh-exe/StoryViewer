import { StyleSheet } from 'react-native';
import { Colors } from './constants';

export const styles = StyleSheet.create({

    //Profile.js
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    profileText: {
        textAlign: 'center',
    },
    textName: {
        fontSize: 24,
        marginBottom: 10,
    },
    subtext: {
        fontSize: 16,
    },
    addButton: {
        backgroundColor: Colors.colorPrimary,
        height: 30,
        width: 30,
        borderRadius: 100,
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        alignSelf: 'flex-end',
        marginTop: -50,
        zIndex: 2,
    },

    //ProfilePicture.js
    avatarContainer: {
        zIndex: 1,
    },
    avatar: {
        height: 190,
        width: 190,
        borderRadius: 100,
    },

    //ImageBorder.js
    decagon: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: -195,
        marginLeft: 62
    },
    decagonBlock: {
        width: 65,
        height: 200,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'red',
        overflow: 'hidden'
    },

    decagonExtreme: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            { rotate: '72deg' }
        ],
    },
    decagonExtremeInv: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            { rotate: '-72deg' }
        ]
    },
    decagonRightInv: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            { rotate: '-36deg' }
        ]
    },
    decagonRight: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            { rotate: '36deg' }
        ]
    },

    //Story.js
    storyContainer: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
    },
    progressBar: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        color: Colors.progressDisplay
    }
});
