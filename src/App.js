import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyBSRelHJ-GDCuSABuErTksIRcIJMFFI5Mw",
        authDomain: "authentication-9e2d8.firebaseapp.com",
        databaseURL: "https://authentication-9e2d8.firebaseio.com",
        projectId: "authentication-9e2d8",
        storageBucket: "authentication-9e2d8.appspot.com",
        messagingSenderId: "730792194583"
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
