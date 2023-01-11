import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Album } from '../types'
import Colors from '../constants/Colors'

export type LastAlbumsItemProps = {
    album: Album
}

const LastAlbumsItem = (props: LastAlbumsItemProps) => {

    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);
  
    const navigation = useNavigation();
  
    function handlePress(){
      navigation.navigate('AlbumDetailScreen', {albumId: props.album.albumId});
    }
  
    function handlePressIn(){
      setScale(0.9);
      setOpacity(0.5);
    }
  
    function handlePressOut(){
      setScale(1);
      setOpacity(1);
    }

  return (
    <TouchableOpacity
    onPress={handlePress} 
    activeOpacity={opacity} 
    style={styles.container}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}>

        <View style={styles.coverContainer}>
            <Image style = {styles.cover} source = {{uri: props.album.coverUrl}} />
        </View>

        <View style={styles.textContainer}>
            <Text numberOfLines={2} style={styles.text}>{props.album.albumName}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default LastAlbumsItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.grey,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 0,
        width: '46%',
    },
    cover: {
        height: 60,
        width: 60,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    textContainer: {
        justifyContent: 'space-evenly',
        flex:1,
    },
    coverContainer: {
        marginRight:10
    }
})