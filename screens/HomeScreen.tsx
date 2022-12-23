import React from 'react'
import AlbumComponent from '../components/AlbumComponent'
import AlbumGroup from '../components/AlbumGroup'
import { View, Text, StyleSheet } from 'react-native'
import { Album } from '../types'


const albumGroup = {
  albumGroupId: '0',
  title: 'More things that you like',
  albumList: [
    {
      albumId: '0',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000003b1c15761720a3ba8d1e68228',
      artists: 'Bad Bunny, J Balvin, Rauw Alejandro'
    },
    {
      albumId: '1',
      coverUrl: 'https://i.scdn.co/image/ab67706f00000002019d8ca89209191491b54da9',
      artists: 'Ozuna, Arcángel, Bad Bunny, KAROL G'
    },
    {
      albumId: '2',
      coverUrl: 'https://i.scdn.co/image/ab67706f000000021f03c07b5df10a0dcf835e6d',
      artists: 'Rauw Alejandro, C Tangana, Anuel AA'
    },
    {
      albumId: '3',
      coverUrl: 'https://i.scdn.co/image/ab67706f000000024f6b896a6e04557b2517d01a',
      artists: 'Myke Towers, Daddy Yankee, KAROL G'
    }
  ]
}

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <AlbumGroup title={albumGroup.title} albumList={albumGroup.albumList}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});