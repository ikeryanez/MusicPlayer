import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Colors from '../constants/Colors';

const InformationScreen = () => {

const pressAbout = () => {
  Linking.openURL('https://newsroom.spotify.com/company-info/')
}

const pressPolicies = () => {
  Linking.openURL('https://www.spotify.com/co/legal/privacy-policy/')
}

const pressTerms = () => {
  Linking.openURL('https://www.spotify.com/co/legal/end-user-agreement/')
}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={pressAbout}>
        <Text style={styles.itemText}>About Spotify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={pressPolicies}>
        <Text style={styles.itemText}>Privacy policies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={pressTerms}>
        <Text style={styles.itemText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  item: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: 'white'
  },
});

export default InformationScreen;
