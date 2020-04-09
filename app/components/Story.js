import React, { Component } from 'react';
import { View, ImageBackground, ProgressBarAndroid, Animated, ProgressViewIOS } from 'react-native';

import { styles } from '../styles';
import { isAndroid } from '../constants';


const AnimatedProgressBar = Animated.createAnimatedComponent(isAndroid ? ProgressBarAndroid : ProgressViewIOS);

export default class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: '',
            progress: new Animated.Value(0),
        };
    }

    componentDidMount() {
        const { route, navigation } = this.props;
        setTimeout(() => navigation.navigate('Home'), 5000);

        this.setState({
            imageSource: route.params.story,
        })

        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }).start();
    }

    onBackPress = () => {
        return false;
    }

    render() {
        const { imageSource } = this.state;
        return (
            <View style={styles.storyContainer}>
                <ImageBackground source={imageSource} style={styles.image} resizeMethod='scale' resizeMode='contain'>
                    {isAndroid ? (
                        <AnimatedProgressBar
                            styleAttr="Horizontal"
                            indeterminate={false}
                            style={styles.progressBar}
                            progress={this.state.progress} />
                    ) : (
                            <AnimatedProgressBar
                                progress={this.state.progress} />
                        )}
                </ImageBackground>
            </View>
        );
    }
}
