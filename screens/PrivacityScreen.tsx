import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const PrivacityScreen = () => {
  const [privacyData, setPrivacyData] = useState([
    {
      id: '1',
      title: 'Let friends find me on Spotify',
      value: false,
    },
    {
      id: '2',
      title: 'Allow friends to see what I amm listening to',
      value: true,
    },
  ]);

  const handleSwitchValueChange = (index) => {
    // Acción a realizar al cambiar el estado del switch
  };

  return (
    <View style={styles.container}>
      {privacyData.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Switch value={item.value} onValueChange={() => handleSwitchValueChange(index)} />
        </View>
      ))}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Save changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  itemTitle: {
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: '#1DB954',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PrivacityScreen;
