import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBSRelHJ-GDCuSABuErTksIRcIJMFFI5Mw",
      authDomain: "authentication-9e2d8.firebaseapp.com",
      databaseURL: "https://authentication-9e2d8.firebaseio.com",
      projectId: "authentication-9e2d8",
      storageBucket: "authentication-9e2d8.appspot.com",
      messagingSenderId: "730792194583"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardSection>{this.renderContent()}</CardSection>
      </View>
    );
  }
}

export default App;
