import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AlbumSongItem from "../components/AlbumSongItem";
import AlbumDetail from "../data/AlbumDetail";

const AlbumDetailScreen = () => {
  
  const route = useRoute();
    
  return (
    <View>
      <Text style={styles.text}>Album Detail</Text>
      <AlbumSongItem song={AlbumDetail.songs[0]}/>
    </View>
  );
};

export default AlbumDetailScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
