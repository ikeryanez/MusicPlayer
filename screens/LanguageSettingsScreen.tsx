import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const languageOptions = [
  'Spanish',
  'Chinese',
  'English',
  'Arabic',
  'Korean',
  'Croatian',
  'Danish',
  'Italian',
  'French',
  'German',
  'Basque',
  'Dutch',
  'Japanese',
  'Portuguese',
  'Ukranian'
];

const LanguageSettingsScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Language Settings</Text>
      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        {languageOptions.map((language, index) => (
          <Picker.Item key={index} label={language} value={language} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    marginBottom: 20
  },
  picker: {
    width: '100%'
  }
});

export default LanguageSettingsScreen;

