import React, {Component} from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <ScrollView style = {styles.container3} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style = {styles.box10}></View>
          <View style = {styles.box11}></View>
          <View style = {styles.box12}></View>
          <View style = {styles.box13}></View>
          <View style = {styles.box10}></View>
          <View style = {styles.box11}></View>
          <View style = {styles.box12}></View>
          <View style = {styles.box13}></View>
        </ScrollView>

        <ScrollView style = {styles.container2}showsVerticalScrollIndicator={false}>
          <View style = {styles.box1}></View>
          <View style = {styles.box2}></View>
          <View style = {styles.box3}></View>
          <View style = {styles.box4}></View>
          <View style = {styles.box5}></View>
          <View style = {styles.box6}></View>
          <View style = {styles.box7}></View>
          <View style = {styles.box8}></View>
          <View style = {styles.box9}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  container2: {
    flex:1
  },
  container3:{
    flex:1,
  },
  box1:{
    backgroundColor: '#ff5722',
    height: 250,
  },
  box2:{
    backgroundColor: 'blue',
    height: 250,
  },
  box3:{
    backgroundColor: 'green',
    height: 250,
  },
  box4:{
    backgroundColor: 'yellow',
    height: 250,
  },
  box5:{
    backgroundColor: 'red',
    height: 250,
  },
  box6:{
    backgroundColor: '#FFF',
    height: 250,
  },
  box7:{
    backgroundColor: '#1919',
    height: 250,
  },
  box8:{
    backgroundColor: '#df3ff9',
    height: 250,
  },
  box9:{
    backgroundColor: '#d81b60',
    height: 250,
  },
  box10:{
    backgroundColor: '#40a8d8',
    height: 450,
    width: 150
  },
  box11:{
    backgroundColor: '#1919',
    height: 450,
    width: 150
  },
  box12:{
    backgroundColor: '#df3ff9',
    height: 450,
    width: 150
  },
  box13:{
    backgroundColor: '#d81b60',
    height: 450,
    width: 150
  },
});