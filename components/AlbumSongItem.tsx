import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Song } from '../types'
import { MaterialIcons } from '@expo/vector-icons';

export type AlbumSongItemProps = {
    song: Song
}

const AlbumSongItem = (props: AlbumSongItemProps) => {

  const [playing, setPlaying] = useState(false);
  const [color, setColor] = useState('white');

  const handlePress = () => {
    setPlaying(!playing)
    if(playing){
      setColor("white");
    }else{
      setColor("green")
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View>
        <Image style={styles.cover} source={{uri:props.song.coverUrl}} />
      </View>
      <View style={styles.right}>
        <View style={styles.topRight}>
          <MaterialIcons name="equalizer" size={24} color="green" style={ { display: playing ? 'flex' : 'none' }}/>
          <Text style={[styles.name, {color}]}>{props.song.songName}</Text>
        </View>
        <Text style={styles.artists}>{props.song.artists}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AlbumSongItem

const styles = StyleSheet.create({
  name: {
    fontSize: 22
  },
  artists: {
    color: '#b3b3b3',
    fontSize: 18
  },
  cover: {
    height: 50,
    width: 50
  },
  container: {
    margin: 15,
    flexDirection: 'row',
  },
  right:{
    paddingLeft: 5,
    justifyContent: 'space-evenly',
  },
  topRight: {
    flexDirection: 'row'
  }
})