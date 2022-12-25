import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AlbumDetailScreen = () => {
  return (
    <View>
        <Text style={styles.text}>Album Detail</Text>
    </View>
  )
}

export default AlbumDetailScreen

const styles = StyleSheet.create({
    text:{
        color: 'white'
    }
})