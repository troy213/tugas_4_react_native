import React, { Component } from 'react';
import { Input, Form, Item, Label, Text, Container, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      angka1: 0,
      angka2: 0,
      operator: "+",
      result: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  onPressPlus = () => {
    this.setState({
      operator: "+"
    });
  }

  onPressMin = () => {
    this.setState({
      operator: "-"
    });
  }

  onPressDiv = () => {
    this.setState({
      operator: "/"
    });
  }

  onPressMult = () => {
    this.setState({
      operator: "*"
    });
  }

  calculate = () => {
    const x = Number(this.state.angka1);
    const y = Number(this.state.angka2);
    const operator = this.state.operator;
    let res;
    if (operator === "+") {
      res = x + y;
    }
    else if (operator === "-") {
      res = x - y;
    }
    else if (operator === "/") {
      res = x / y;
    }
    else if (operator === "*") {
      res = x * y;
    } else {
      res = "unknow operator";
    }

    this.setState({
      result: res
    });
  }

  handleChange = (value, e) => {
    this.setState({
      [value]:e
    });
  }

  render(){
    return(
      <Container>
        <Item floatingLabel last>
          <Label>Masukkan angka</Label>
          <Input placeholder="Masukkan angka" onChangeText={e => this.handleChange("angka1",e)} />
        </Item>
        <Text style={styles.operate}>{this.state.operator}</Text>
        <Item floatingLabel last>
          <Label>Masukkan angka</Label>
          <Input placeholder="Masukkan angka" onChangeText={e => this.handleChange("angka2",e)} />
        </Item>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            width: 320,
            marginLeft: 20,
            marginTop: 30
          }}
        />
        <Text style={styles.res}>{this.state.result}</Text>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            width: 320,
            marginLeft: 20,
          }}
        />
        <Text style={{margin: 20}}>Operator</Text>
        <Container style={styles.operator}>
          <Button rounded primary onPress={this.onPressPlus}><Text>+</Text></Button>
          <Button rounded primary onPress={this.onPressMin}><Text>-</Text></Button>
          <Button rounded primary onPress={this.onPressDiv}><Text>/</Text></Button>
          <Button rounded primary onPress={this.onPressMult}><Text>*</Text></Button>
          <Button rounded success onPress={this.calculate}>
            <Text>Hitung</Text>
          </Button>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  operator: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  operate: {
    textAlign: "center",
    fontSize: 35,
    color: "#191EE0",
    margin: 15
  },
  res: {
    textAlign: "center",
    fontSize: 35,
    margin: 15
  }
})

export default Content;
