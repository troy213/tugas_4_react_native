import React, { Component } from 'react';
import { Button, Text, Container } from 'native-base';
import { View, StyleSheet, StatusBar } from 'react-native';
import Content from './Component/Content';

class App extends Component {
  render(){
    return(
      <Container>
        <StatusBar backgroundColor="gray" />
        <View style={styles.header}>
          <Text>KALKULATOR REACT NATIVE</Text>
        </View>
        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00F280",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10
  }
})

export default App;
