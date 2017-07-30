import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <Image
        source={require('../../static/images/background.jpg')}
        style={styles.container}>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

export default App;
