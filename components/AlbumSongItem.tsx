import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Song } from '../types'

export type AlbumSongItemProps = {
    song: Song
}

const AlbumSongItem = (props: AlbumSongItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.cover} source={{uri:props.song.coverUrl}} />
      </View>
      <View>
        <Text style={styles.name}>{props.song.songName}</Text>
        <Text style={styles.artists}>{props.song.artists}</Text>
      </View>
    </View>
  )
}

export default AlbumSongItem

const styles = StyleSheet.create({
  name: {
    color: 'white'
  },
  artists: {
    color: '#b3b3b3'
  },
  cover: {
    height: 50,
    width: 50
  },
  container: {
    flexDirection: 'row',
    
  }
})