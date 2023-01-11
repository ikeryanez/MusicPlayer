import React, { useEffect, useState } from 'react'
import AlbumComponent from '../components/AlbumComponent'
import AlbumGroup from '../components/AlbumGroup'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Album } from '../types'
import AlbumGroupList from '../data/AlbumGroups'
import HomeHeader from '../components/HomeHeader'
import LastAlbums from '../components/LastAlbums'
import AlbumList from '../data/AlbumList'
import HomeListHeader from '../components/HomeListHeader'


const HomeScreen = ({navigation}:any) => {
  return (
    <View style = {styles.container}>
      {/* <HomeHeader/>
      <LastAlbums albumList={AlbumList}/> */}
      <FlatList
            ListHeaderComponent={<HomeListHeader/>}
            showsVerticalScrollIndicator={false}
            data={AlbumGroupList}
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
    marginTop:80
  },
});