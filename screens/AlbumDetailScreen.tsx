import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AlbumDetailHeader from "../components/AlbumDetailHeader";
import AlbumSongItem from "../components/AlbumSongItem";
import AlbumDetail from "../data/AlbumDetail";
import Albums from "../data/Albums";
import Songs from "../data/Songs";
import { Album } from "../types";

const AlbumDetailScreen = ({navigation}:any, route:any) => {
  
  route = useRoute();
  const albumId = route?.params.albumId;
    
  return (
    <View style={styles.container}>
      {/* <AlbumDetailHeader album={AlbumDetail}/> */}
      <FlatList
            ListHeaderComponent={<AlbumDetailHeader album={{
              albumId: albumId,
              albumName: Albums[albumId].albumName,
              coverUrl: Albums[albumId].coverUrl,
              artists: Albums[albumId].artists,
              songs: Albums[albumId].songs}
            }/>}
            showsVerticalScrollIndicator={false}
            data={Albums[albumId].songs}
            renderItem={({ item }) => <AlbumSongItem song={item}/>}
            keyExtractor={item => item.songId}
        />
    </View>
  );
};

export default AlbumDetailScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    marginTop: 40
  }
});
