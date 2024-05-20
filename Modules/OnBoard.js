import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { height, width } from '../App';

const musicIcon = require('../assets/musicIcon.png');

const OnBoard = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.heading}>
        <Image source={musicIcon} style={styles.icon} />
        <Text style={styles.headingText}>Listen Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,  
  },
  heading: {
    padding: width * 0.05,  
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    color: "#000",
    fontSize: width * 0.08,  
    marginTop: height * 0.02,  
    fontFamily: 'SourceCodePro',  
  },
  icon: {
    width: width * 0.1,  
    height: width * 0.1,  
  },
});

export default OnBoard;
