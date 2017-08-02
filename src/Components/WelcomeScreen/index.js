import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    console.log('wtf');
    return (
      <View style={styles.container}>
        <Text>Places</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    borderColor: 'red',
    width: '100%',
    flexDirection: 'row'
  }
});

export default WelcomeScreen;
