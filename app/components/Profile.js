import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker';

import ProfilePicture from './ProfilePicture';
import ImageBorder from './ImageBorder';
import { defaultProfilePictureUrl, isAndroid } from '../constants';
import { styles } from '../styles';
import { checkPermissions } from '../utils/AndroidPermissions';
import { showToastMessage } from '../utils/Messages';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePicture: { uri: defaultProfilePictureUrl },
            story: '',
            storyStatus: 'none',
            pickerTitle: '',
        };
    }

    checkPermissionsAndShowImagePicker = onImageSelected => {
        checkPermissions().then(result => {
            if (typeof result === "boolean") {
                if (result) {
                    this.showImagePickerDialog(onImageSelected);
                } else {
                    showToastMessage("Please grant camera and storage permissions.");
                }
            } else {
                if (result[PermissionsAndroid.PERMISSIONS.CAMERA] === "granted" &&
                    result[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === "granted") {
                    this.showImagePickerDialog(onImageSelected);
                } else {
                    showToastMessage("Please grant camera and storage permissions.");
                }
            }
        });
    }

    showImagePickerDialog = onImageSelected => {
        const { pickerTitle } = this.state
        ImagePicker.launchCamera
        ImagePicker.showImagePicker({ title: pickerTitle }, response => {
            if (response.error) {
                showToastMessage("Unexpected Error occured. Please try again.");
            } else if (!response.didCancel) {
                const imageSource = { uri: response.uri };
                onImageSelected(imageSource);
            }
        });
    }

    handleAvatarPress = () => {
        this.setState({
            pickerTitle: 'Select a profile picture'
        })
        if (isAndroid) {
            this.checkPermissionsAndShowImagePicker(this.updateProfilePicture);
        } else {
            this.showImagePickerDialog(this.updateProfilePicture);
        }
    }

    updateProfilePicture = imageSource => {
        this.setState({
            profilePicture: imageSource
        });
    }

    handleAddButtonPress = () => {
        this.setState({
            pickerTitle: 'Select your story'
        })
        if (isAndroid) {
            this.checkPermissionsAndShowImagePicker(this.updateStory);
        } else {
            this.showImagePickerDialog(this.updateStory);
        }
    }

    updateStory = imageSource => {
        this.setState({
            story: imageSource,
            storyStatus: 'new',
        });
    }

    viewStory = () => {
        const { story, storyStatus } = this.state;
        if (storyStatus !== 'none') {
            this.setState({
                storyStatus: 'viewed'
            });
            this.props.navigation.navigate('Story', {
                story
            });
        } else {
            showToastMessage("You don't have a story yet. Press the '+' icon to add one." +
                "Or Long Press on the avatar to choose a Profile Picture.");
        }
    }

    render() {
        const { profilePicture, storyStatus } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignContent: 'center' }}>
                    <ProfilePicture imageSource={profilePicture} onAvatarPress={this.viewStory} onAvatarLongPress={this.handleAvatarPress} />
                    <ImageBorder status={storyStatus} />
                    <Icon name="plus" style={styles.addButton} onPress={this.handleAddButtonPress} />
                </View>
                <View style={{ flex: 1, marginTop: 50 }}>
                    <Text style={[styles.profileText, styles.textName]}>Sandarbh Sahu</Text>
                    <Text style={[styles.profileText, styles.subtext]}>Front-end Developer</Text>
                    <Text style={[styles.profileText, styles.subtext]}>www.linkedin.com</Text>
                </View>
            </View>
        );
    }
}
