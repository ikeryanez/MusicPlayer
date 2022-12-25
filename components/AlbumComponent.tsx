import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import type { Album } from '../types'

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {

  const [scale, setScale] = useState(1);

  const onPress = () => {
    console.warn('')
  }

  return (
    <TouchableOpacity activeOpacity={0.7} style={ { transform: [{ scale }] }}
    onPressIn={() => setScale(0.9)}
    onPressOut={() => setScale(1)}>
      <View style = {styles.container}>
        <Image style = {styles.cover} source = {{uri: props.album.coverUrl}} />
        <Text numberOfLines={2} style = {styles.text}> {props.album.artists} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AlbumComponent

const styles = StyleSheet.create({
  container: {
    width: 150,
    margin: 5
  },
  cover:{
    width: '100%',
    height:150,
    marginBottom: 5,
    borderRadius:10
  },
  text:{
    color: '#b3b3b3',
  }
});