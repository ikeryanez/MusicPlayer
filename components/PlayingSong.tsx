import React, {useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Song } from '../types'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import { FontAwesome } from '@expo/vector-icons';
import Songs from '../data/Songs';

const song = {
  songId: '1',
  songName: 'Shakira BZRP Session',
  artists: 'Shakira, Bizarrap',
  songUrl: './songs/shakira.mp3',
  coverUrl: 'https://i1.sndcdn.com/artworks-02I0xQ5birip-0-t500x500.jpg'
}


const PlayingSong = () => {

  const [sound, setSound] = useState<Sound|null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlaybackStatusUpdate = (status: any) => {
    console.log(status)
  } 
  

  const playSong = async () => {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(require('./songs/shakira.mp3'));
    setSound(soundObject);
    if (sound) {
      await sound.playAsync();
    }
    setIsPlaying(true);
  }

  useEffect(() => {
    playSong();
  }, [])


  const playPause = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    }else{
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  }
  

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