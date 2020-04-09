import React, { Component } from 'react';
import { } from 'react-native';

export default class StoryViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            initialized: false,
            versionChecked: false,
            versionValid: true,
            unsubscribeNetworkListener: null,
        };
    }

    render() {
        const Layout = createRootNavigator(signedIn);
        return <Layout />;
    }
}
