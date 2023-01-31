import React, {useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Song } from '../types'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import { FontAwesome } from '@expo/vector-icons';

const song = {
  songId: '1',
  songName: 'Test Song',
  artists: 'Artist',
  songUrl: 'gs://musicplayer-62042.appspot.com/shakira.mp3',
  coverUrl: 'https://i.scdn.co/image/ab67706f000000021f03c07b5df10a0dcf835e6d'
}

const PlayingSong = () => {

  const [sound, setSound] = useState<Sound|null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);


  const onPlaybackStatusUpdate = (status: any) => {
    console.log(status)
  } 
  
  const playSong = async () => {
    const { sound: newSong } = await Sound.createAsync(
      {uri: song.songUrl},
      {shouldPlay: isPlaying},
      onPlaybackStatusUpdate
    )
    setSound(newSong)
  }

  useEffect(() => {
    playSong();
  }, [])

  const playPause = async () => {
    setIsPlaying(!isPlaying)
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };
  

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


      <TouchableOpacity style={styles.buttons} onPress={playPause}>
        {isPlaying ? (
          <FontAwesome name="pause" size={30} color="white" />
        ) : (
          <FontAwesome name="play" size={30} color="white" />
        )}
      </TouchableOpacity>

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
    backgroundColor: Colors.grey,
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