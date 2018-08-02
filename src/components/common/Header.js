// import libraries for making a component
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make Component
class Header extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  };
};

// style the component
const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#F8F8F8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      paddingTop: 40,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20,
    }
});

// make component available to other parts of the app
export { Header };
