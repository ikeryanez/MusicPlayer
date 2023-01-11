import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Album } from '../types'
import LastAlbumsItem from './LastAlbumsItem'

export type LastAlbumsProps = {
    albumList: Album[]
}

const LastAlbums = (props: LastAlbumsProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.pairContainer}>
            <LastAlbumsItem album={props.albumList[0]}/>
            <LastAlbumsItem album={props.albumList[1]}/>
        </View>
        <View style={styles.pairContainer}>
            <LastAlbumsItem album={props.albumList[2]}/>
            <LastAlbumsItem album={props.albumList[3]}/>
        </View>
        <View style={styles.pairContainer}> 
            <LastAlbumsItem album={props.albumList[4]}/>
            <LastAlbumsItem album={props.albumList[5]}/>
        </View>
    </View>
  )
}

export default LastAlbums

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    pairContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    }
})