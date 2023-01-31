import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const handleAccountPress = () => {
    // Acción a realizar al tocar el apartado de cuenta
  };

  const handlePrivacyPress = () => {
    // Acción a realizar al tocar el apartado de privacidad
  };

  const handleSecurityPress = () => {
    // Acción a realizar al tocar el apartado de seguridad
  };

  const handleIdiomasPress = () => {
    // Acción a realizar al tocar el apartado de seguridad
  };

  const handleAlmacenamientoPress = () => {
    // Acción a realizar al tocar el apartado de seguridad
  };

  const handleInformacionPress = () => {
    // Acción a realizar al tocar el apartado de seguridad
  };

  const handleCerrarSesionPress = () => {
    // Acción a realizar al tocar el apartado de perfil
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ajustes</Text>
      <TouchableOpacity style={styles.sectionContainer} onPress={handleAccountPress}>
        <Text style={styles.sectionHeader}>Cuenta</Text>
        {/* Aquí puedes añadir componentes relacionados con la cuenta */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionContainer} onPress={handlePrivacyPress}>
        <Text style={styles.sectionHeader}>Privacidad</Text>
        {/* Aquí puedes añadir componentes relacionados con la privacidad */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionContainer} onPress={handleSecurityPress}>
        <Text style={styles.sectionHeader}>Seguridad</Text>
        {/* Aquí puedes añadir componentes relacionados con la seguridad */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionContainer} onPress={handleIdiomasPress}>
        <Text style={styles.sectionHeader}>Idiomas</Text>
        {/* Aquí puedes añadir componentes relacionados con la seguridad */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionContainer} onPress={handleAlmacenamientoPress}>
        <Text style={styles.sectionHeader}>Almacenamiento</Text>
        {/* Aquí puedes añadir componentes relacionados con la seguridad */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionContainer} onPress={handleInformacionPress}>
        <Text style={styles.sectionHeader}>Informacion</Text>
        {/* Aquí puedes añadir componentes relacionados con la seguridad */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionContainer} onPress={handleCerrarSesionPress}>
        <Text style={styles.sectionHeader}>Cerrar sesion</Text>
        {/* Aquí puedes añadir componentes relacionados con el perfil */}
      </TouchableOpacity>
    </View>
  );
};

//cambiar estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  sectionContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SettingsScreen;
