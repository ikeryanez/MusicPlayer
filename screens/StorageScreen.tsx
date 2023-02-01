import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Slider, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StorageScreen = () => {
  const [storageValue, setStorageValue] = useState(50);

  const handleSliderValueChange = (value: any) => {
    // Acción a realizar al cambiar el valor del slider
    setStorageValue(value);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Storage</Text>
      {/* <Slider
        value={storageValue}
        onValueChange={(value) => handleSliderValueChange(value)}
        minimumValue={0}
        maximumValue={100}
      /> */}
      <View style={styles.storageContainer}>
        <Text style={styles.storageValue}>{storageValue}%</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Delete downloads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Clean cache</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    color: 'white'
  },
  storageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  storageValue: {
    fontSize: 18,
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: '#1DB954',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default StorageScreen;
