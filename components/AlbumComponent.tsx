import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import type { Album } from '../types'

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.cover} source = {{uri: props.album.coverUrl}} />
        <Text style = {styles.text}> {props.album.artists} </Text>
    </View>
  )
}

export default AlbumComponent

const styles = StyleSheet.create({
  container: {
    width: 150,
    margin:5
  },
  cover:{
    width: '100%',
    height:150,
    marginBottom: 5,
  },
  text:{
    color: '#b3b3b3',
  }
});