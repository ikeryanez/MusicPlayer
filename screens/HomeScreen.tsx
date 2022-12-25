import React from 'react'
import AlbumComponent from '../components/AlbumComponent'
import AlbumGroup from '../components/AlbumGroup'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Album } from '../types'

const albumGroupList = [
  {
    albumGroupId: '0',
    title: 'More things that you like',
    albumList: [
      {
        albumId: '4',
        coverUrl: 'https://i.scdn.co/image/ab67706f00000003b1c15761720a3ba8d1e68228',
        artists: 'Bad Bunny, J Balvin, Rauw Alejandro'
      },
      {
        albumId: '5',
        coverUrl: 'https://i.scdn.co/image/ab67706f00000002019d8ca89209191491b54da9',
        artists: 'Ozuna, Arcángel, Bad Bunny, KAROL G'
      },
      {
        albumId: '6',
        coverUrl: 'https://i.scdn.co/image/ab67706f000000021f03c07b5df10a0dcf835e6d',
        artists: 'Rauw Alejandro, C Tangana, Anuel AA'
      },
      {
        albumId: '7',
        coverUrl: 'https://i.scdn.co/image/ab67706f000000024f6b896a6e04557b2517d01a',
        artists: 'Myke Towers, Daddy Yankee, KAROL G'
      }
    ]
  },
  {
    albumGroupId: '1',
    title: 'Most reproduced in Spain',
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
  },
  {
    albumGroupId: '2',
    title: 'Urban Sound',
    albumList: [
      {
        albumId: '8',
        coverUrl: 'https://i.scdn.co/image/ab67706f00000003b1c15761720a3ba8d1e68228',
        artists: 'Bad Bunny, J Balvin, Rauw Alejandro'
      },
      {
        albumId: '9',
        coverUrl: 'https://i.scdn.co/image/ab67706f00000002019d8ca89209191491b54da9',
        artists: 'Ozuna, Arcángel, Bad Bunny, KAROL G'
      },
      {
        albumId: '10',
        coverUrl: 'https://i.scdn.co/image/ab67706f000000021f03c07b5df10a0dcf835e6d',
        artists: 'Rauw Alejandro, C Tangana, Anuel AA'
      },
      {
        albumId: '11',
        coverUrl: 'https://i.scdn.co/image/ab67706f000000024f6b896a6e04557b2517d01a',
        artists: 'Myke Towers, Daddy Yankee, KAROL G'
      }
    ]
  },
  {
    albumGroupId: '3',
    title: 'Reggaeton, reggaeton!',
    albumList: [
      {
        albumId: '12',
        coverUrl: 'https://i.scdn.co/image/ab67706f00000003b1c15761720a3ba8d1e68228',
        artists: 'Bad Bunny, J Balvin, Rauw Alejandro'
      },
      {
        albumId: '13',
        coverUrl: 'https://i.scdn.co/image/ab67706f00000002019d8ca89209191491b54da9',
        artists: 'Ozuna, Arcángel, Bad Bunny, KAROL G'
      },
      {
        albumId: '14',
        coverUrl: 'https://i.scdn.co/image/ab67706f000000021f03c07b5df10a0dcf835e6d',
        artists: 'Rauw Alejandro, C Tangana, Anuel AA'
      },
      {
        albumId: '15',
        coverUrl: 'https://i.scdn.co/image/ab67706f000000024f6b896a6e04557b2517d01a',
        artists: 'Myke Towers, Daddy Yankee, KAROL G'
      }
    ]
  },
]

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <FlatList
            showsVerticalScrollIndicator={false}
            data={albumGroupList}
            renderItem={({ item }) => <AlbumGroup title={item.title} albumList={item.albumList}/>}
            keyExtractor={item => item.albumGroupId}
        />
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