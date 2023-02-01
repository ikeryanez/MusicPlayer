import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Library</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Playlists</Text>
          <View style={styles.playlistContainer}>
            <Image
              style={styles.playlistImage}
              source={{ uri: 'https://example.com/playlist1.jpg' }}
            />
            <Text style={styles.playlistName}>Playlist 1</Text>
          </View>
          <View style={styles.playlistContainer}>
            <Image
              style={styles.playlistImage}
              source={{ uri: 'https://example.com/playlist2.jpg' }}
            />
            <Text style={styles.playlistName}>Playlist 2</Text>
          </View>
          
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Álbums</Text>
          <View style={styles.albumContainer}>
            <Image
              style={styles.albumImage}
              source={{ uri: 'https://example.com/album1.jpg' }}
            />
            <Text style={styles.albumName}>Album 1</Text>
          </View>
          <View style={styles.albumContainer}>
            <Image
              style={styles.albumImage}
              source={{ uri: 'https://example.com/album2.jpg' }}
            />
            <Text style={styles.albumName}>Album 2</Text>
          </View>
          
        </View>
        {/* Aquí puedes añadir más secciones, como canciones, artistas, etc. */}
      </ScrollView>
    </View>
  );
};

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
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 20,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playlistContainer: {

  },
});

export default LibraryScreen;
