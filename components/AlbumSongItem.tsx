import React, {useContext, useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Song } from '../types'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { SongContext } from '../Context';

export type AlbumSongItemProps = {
    song: Song
}

const AlbumSongItem = (props: AlbumSongItemProps) => {

  const {
    actualSongId,
    setActualSongId
  } = useContext(SongContext);

  const [playing, setPlaying] = useState(false);
  const [color, setColor] = useState('white');



  const handlePress = () => {
    console.log('Id de cancion:'+ props.song.songId);
    const newId: string = props.song.songId;
    console.log('Id var newId:' + newId)
    setActualSongId(newId)
    console.log('Id de cancion de contexto nueva:' + actualSongId)
    // setPlaying(!playing)
    // if(playing){
    //   setColor("white");
    // }else{
    //   setColor("#1ed760")
    // }
  }

  useEffect(() => {
    actualSongId===props.song.songId ? setColor("#1ed760") : setColor("white")
  }, [actualSongId])
  

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>

      <View>
        <Image style={styles.cover} source={{uri:props.song.coverUrl}} />
      </View>

      <View style={styles.right}>

        <View style={styles.topRight}>
          <MaterialIcons name="equalizer" size={24} color="#1ed760" style={ { display: actualSongId===props.song.songId ? 'flex' : 'none' }}/>
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
    fontSize: 22,
  },
  artists: {
    color: Colors.textGrey,
    fontSize: 18
  },
  cover: {
    height: 50,
    width: 50,
    borderRadius: 10
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