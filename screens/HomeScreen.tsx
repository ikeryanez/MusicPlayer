import React from 'react'
import AlbumComponent from '../components/AlbumComponent'
import { View, Text, StyleSheet } from 'react-native'
import { Album } from '../types'

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <AlbumComponent album = {album} />
    </View>
  )
}

const album: Album = {
  albumId: '0',
  coverUrl: 'https://i.scdn.co/image/ab67706f00000003b1c15761720a3ba8d1e68228',
  artists: 'Bad Bunny, J Balvin, Rauw Alejandro'
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});