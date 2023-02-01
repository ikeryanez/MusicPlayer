import React, {useContext, useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Song } from '../types'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import { FontAwesome } from '@expo/vector-icons';
import Songs from '../data/Songs';
import { SongContext } from '../Context';

const PlayingSong = () => {

  const {
    actualSongId,
    setActualSongId
  } = useContext(SongContext);

  let url: string = './songs/shakira.mp3'

  let firstSong: Song = {
      songId: actualSongId,
      songName: Songs[actualSongId].songName,
      artists: Songs[actualSongId].artists,
      songUrl: Songs[actualSongId].songUrl,
      coverUrl: Songs[actualSongId].coverUrl
  }

  const [sound, setSound] = useState<Sound|null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const [song, setSong] = useState(firstSong)

  const onPlaybackStatusUpdate = (status: any) => {
    console.log(status)
  } 
  

  const playSong = async () => {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(require(url));
    setSound(soundObject);
    if (sound) {
      await sound.playAsync();
    }
    setIsPlaying(true);
  }

  useEffect(() => {
    setSong({
      songId: actualSongId,
      songName: Songs[actualSongId].songName,
      artists: Songs[actualSongId].artists,
      songUrl: Songs[actualSongId].songUrl,
      coverUrl: Songs[actualSongId].coverUrl
    })
    console.log(song)
    playSong();
  }, [])


  const playPause = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    }else{
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  }
  

  return (
    <TouchableOpacity style={styles.container}>

        <View style={styles.song}>

            <View>
                <Image style={styles.cover} source={{uri: Songs[actualSongId].coverUrl}} />
            </View>

            <View style={styles.right}>

                <View style={styles.topRight}>
                    <Text style={styles.name}>{Songs[actualSongId].songName}</Text>
                </View>

                <Text style={styles.artists}>{Songs[actualSongId].artists}</Text>

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