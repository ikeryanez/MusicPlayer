import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Song } from '../types'
import { MaterialIcons } from '@expo/vector-icons';
import song from '../data/Song';
import { Entypo } from '@expo/vector-icons';

const PlayingSong = () => {

  return (
    <TouchableOpacity style={styles.container}>

        <View style={styles.song}>

            <View>
                <Image style={styles.cover} source={{uri:song.coverUrl}} />
            </View>

            <View style={styles.right}>

                <View style={styles.topRight}>
                    <Text style={styles.name}>{song.songName}</Text>
                </View>

                <Text style={styles.artists}>{song.artists}</Text>

            </View>

        </View>


      <View style={styles.buttons}>
        <Entypo name="controller-play" size={40} color="white" />
      </View>

    </TouchableOpacity>
  )
}

export default PlayingSong

const styles = StyleSheet.create({
  name: {
    fontSize: 17,
    color: 'white'
  },
  artists: {
    color: '#b3b3b3',
    fontSize: 17
  },
  cover: {
    height: 40,
    width: 40,
    borderRadius: 10
  },
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 73,
    backgroundColor: '#1ed760',
    width: '95%',
    padding:10,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  right:{
    paddingLeft: 5,
    justifyContent: 'space-evenly',
  },
  topRight: {
    flexDirection: 'row'
  },
  song: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})