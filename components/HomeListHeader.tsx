import React from "react";
import { StyleSheet, View } from "react-native";
import Albums from "../data/Albums";
import HomeHeader from "./HomeHeader";
import LastAlbums from "./LastAlbums";

const HomeListHeader = () => {
  return (
    <View style = {styles.container}>
      <View>
        <HomeHeader />
      </View>
      <View>
        <LastAlbums albumList={Albums} />
      </View>
    </View>
  );
};

export default HomeListHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})
