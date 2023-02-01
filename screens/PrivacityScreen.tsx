import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const PrivacityScreen = () => {
  const [privacyData, setPrivacyData] = useState([
    {
      id: '1',
      title: 'Let friends find me on Spotify',
      value: true,
    },
    {
      id: '2',
      title: 'Allow friends to see what I am listening to',
      value: true,
    },
  ]);

  const handleSwitchValueChange = (index: any) => {
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
    marginTop: 40
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    color: 'white'
  },
  itemTitle: {
    fontSize: 15,
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

export default PrivacityScreen;
