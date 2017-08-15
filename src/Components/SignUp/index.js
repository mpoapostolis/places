import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class SignUp extends Component {
  static navigationOptions = {
    title: 'Places'
  };
  state = {
    show: ''
  };
  loginOrSignUp() {
    const { inputContainer, btnContainer, btnText } = styles;
    return (
      <View style={inputContainer}>
        <TouchableOpacity
          onClick={() => this.setState({ show: 'signup' })}
          style={btnContainer}
        >
          <Text style={btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onClick={() => this.setState({ show: 'login' })}
          style={btnContainer}
        >
          <Text style={btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    const { container, logo, title, logoContainer, inputContainer } = styles;
    return (
      <View style={container}>
        <View style={logoContainer}>
          <Image source={require('../../static/images/logo.png')} />
        </View>
        {this.loginOrSignUp()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42A5F5'
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1
  },
  btnContainer: {
    margin: 10,
    padding: 10,
    width: 250,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.29)'
  },
  btnText: {
    textAlign: 'center',
    color: 'white'
  }
});

export default SignUp;
