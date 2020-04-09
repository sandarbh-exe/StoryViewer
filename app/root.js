import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import StoryScreen from './screens/StoryScreen';

const NavStack = createStackNavigator();
const { Navigator, Screen } = NavStack;

export default Root = () => (
    <NavigationContainer>
        <Navigator initialRouteName='Home' mode='modal' headerMode='none' screenOptions={{
            gestureEnabled: true
        }}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Story" component={StoryScreen} />
        </Navigator>
    </NavigationContainer>
)