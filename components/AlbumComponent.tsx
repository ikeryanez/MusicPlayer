import React from 'react'
import { Text, View, Image } from 'react-native'
import type { Album } from '../types'

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {
  return (
    <View>
        <Image source = {{uri: props.album.coverUrl}} />
        <Text> {props.album.artists} </Text>
    </View>
  )
}

export default AlbumComponent