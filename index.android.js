import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/Views/Main'
export default class places1 extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('places1', () => places1);
