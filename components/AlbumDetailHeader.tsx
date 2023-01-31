import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Album } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export type Props = {
  album: Album;
};

const AlbumDetailHeader = (props: Props) => {
  const navigation = useNavigation();

  function pressBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={pressBack} style={styles.back}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.cover} source={{ uri: props.album.coverUrl }} />
      </View>
      <View>
        <Text style={styles.text}>{props.album.albumName}</Text>
      </View>
      <View style={styles.bottomContanier}>
        <View style={styles.bottomLeftContainer}>
          <TouchableOpacity style={styles.touchableLeft}>
            <AntDesign name="heart" size={24} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableLeft}>
            <SimpleLineIcons name="options" size={24} color="#b3b3b3" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRightContainer}>
          <TouchableOpacity style={styles.touchableRight}>
            <FontAwesome name="play-circle" size={60} color="#1ed760" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableRight}>
            <Ionicons name="shuffle" size={40} color="#1ed760" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlbumDetailHeader;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  cover: {
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
  },
  bottomContanier: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLeftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomRightContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  touchableLeft: {
    marginRight: 10,
  },
  touchableRight: {
    marginLeft: 10,
  },
  back: {
    margin: 5
  }
});
