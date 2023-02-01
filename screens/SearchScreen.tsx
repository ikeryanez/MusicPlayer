import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    // Aquí podrías hacer una llamada a una API para buscar canciones
    // o realizar una búsqueda local con los resultados que tengas almacenados
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={handleSearch}
        placeholder="Search a song, an album or an artist"
        autoFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginVertical: 20,
  },
});

export default SearchScreen;
