import React from 'react'
import { FlatList, StyleSheet, Text, View, } from 'react-native'
import type { Album } from '../types'
import AlbumComponent from './AlbumComponent'

export type AlbumGroupProps = {
    title: string,
    albumList: Album[],
}

const AlbumGroup = (props: AlbumGroupProps) => {
  return (
    <View style = {styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.albumList}
            renderItem={({ item }) => <AlbumComponent album={item}/>}
            keyExtractor={item => item.albumId}
        />
    </View>
  )
}

export default AlbumGroup

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    title:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 5
    }
});
