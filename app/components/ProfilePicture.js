import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from '../styles';

export default class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: '',
        };
    }

    render() {
        const { imageSource, onAvatarPress, onAvatarLongPress } = this.props;
        return (
            <TouchableOpacity style={styles.avatarContainer} onPress={onAvatarPress} onLongPress={onAvatarLongPress}>
                <Image source={imageSource} style={styles.avatar} />
            </TouchableOpacity>

        );
    }
}
