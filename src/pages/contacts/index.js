import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contact() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hello Contact!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#2a2a2a',
    fontSize: 30
  }
});