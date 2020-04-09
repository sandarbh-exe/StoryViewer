import React, { Component } from 'react';
import { View } from 'react-native';

import { Colors } from '../constants';
import { styles } from '../styles';

export default class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderStyle: {}
        };

        switch (props.status) {
            case 'new':
                this.state.borderStyle = {
                    borderColor: Colors.statusNew,
                };
                break;
            case 'viewed':
                this.state.borderStyle = {
                    borderColor: Colors.statusViewed,
                }
                break;
            default:
                this.state.borderStyle = {
                    borderColor: Colors.statusNone,
                }
                break;
        }
    }

    componentDidUpdate(prevProps) {
        const { status } = this.props;
        if (prevProps.status != status) {
            borderColor = '';
            switch (status) {
                case 'new':
                    borderColor = '#FFB923';
                    break;
                case 'viewed':
                    borderColor = '#7C6B7C';
                    break;
                default:
                    borderColor = 'transparent';
                    break;
            }
            this.setState({
                borderStyle: {
                    borderColor,
                }
            })
        }
    }

    render() {
        const { borderStyle } = this.state;
        return (
            <View style={styles.decagon}>
                <View style={[styles.octagonUp, styles.decagonBlock, borderStyle]} />
                <View style={[styles.decagonExtreme, styles.decagonBlock, borderStyle]} />
                <View style={[styles.decagonRightInv, styles.decagonBlock, borderStyle]} />
                <View style={[styles.decagonRight, styles.decagonBlock, borderStyle]} />
                <View style={[styles.decagonExtremeInv, styles.decagonBlock, borderStyle]} />
            </View>

        );
    }
}
