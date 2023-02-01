import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = ({navigation}:any) => {

  const handleAccountPress = () => {
    navigation.navigate('AccountScreen')
  };

  const handlePrivacyPress = () => {
    navigation.navigate('PrivacityScreen')
  };

  const handleSecurityPress = () => {
    navigation.navigate('SecurityScreen')
  };

  const handleIdiomasPress = () => {
    navigation.navigate('LanguagesScreen')
  };

  const handleAlmacenamientoPress = () => {
    navigation.navigate('StorageScreen')
  };

  const handleInformacionPress = () => {
    navigation.navigate('InformationScreen')
  };

  const handleCerrarSesionPress = () => {
    //cerrar sesion
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
        <TouchableOpacity style={styles.sectionContainer} onPress={handleAccountPress}>
          <Text style={styles.sectionHeader}>Account</Text>
          <Feather name="arrow-right" size={24} color="white" />
          {/* Aquí puedes añadir componentes relacionados con la cuenta */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} onPress={handlePrivacyPress}>
          <Text style={styles.sectionHeader}>Privacity</Text>
          <Feather name="arrow-right" size={24} color="white" />
          {/* Aquí puedes añadir componentes relacionados con la privacidad */}
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.sectionContainer} onPress={handleSecurityPress}>
          <Text style={styles.sectionHeader}>Security</Text>
          <Feather name="arrow-right" size={24} color="black" />
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.sectionContainer} onPress={handleIdiomasPress}>
          <Text style={styles.sectionHeader}>Languages</Text>
          <Feather name="arrow-right" size={24} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.sectionContainer} onPress={handleAlmacenamientoPress}>
          <Text style={styles.sectionHeader}>Storage</Text>
          <Feather name="arrow-right" size={24} color="white" />
          {/* Aquí puedes añadir componentes relacionados con la seguridad */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} onPress={handleInformacionPress}>
          <Text style={styles.sectionHeader}>Information</Text>
          <Feather name="arrow-right" size={24} color="white" />
          {/* Aquí puedes añadir componentes relacionados con la seguridad */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} onPress={handleCerrarSesionPress}>
          <Text style={styles.sectionHeader}>Logout</Text>
          <Feather name="arrow-right" size={24} color="white" />
          {/* Aquí puedes añadir componentes relacionados con el perfil */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

//cambiar estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'white'
  },
  sectionContainer: {
    width: '100%',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
});

export default SettingsScreen;
