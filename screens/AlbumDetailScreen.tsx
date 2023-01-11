import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AlbumDetailHeader from "../components/AlbumDetailHeader";
import AlbumSongItem from "../components/AlbumSongItem";
import AlbumDetail from "../data/AlbumDetail";

const AlbumDetailScreen = ({navigation}:any) => {
  
  const route = useRoute();
    
  return (
    <View style={styles.container}>
      {/* <AlbumDetailHeader album={AlbumDetail}/> */}
      <FlatList
            ListHeaderComponent={<AlbumDetailHeader album={AlbumDetail}/>}
            showsVerticalScrollIndicator={false}
            data={AlbumDetail.songs}
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
