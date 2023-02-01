import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { View } from "./Themed";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const HomeHeader = () => {

    const navigation = useNavigation();

    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
      const currentHour = new Date().getHours();
      if (currentHour < 6) {
        setGreeting('Good night!');
      } else if (currentHour < 12){
        setGreeting('Good morning!');
      } else if (currentHour < 18){
        setGreeting('Good afternoon!');
      } else{
        setGreeting('Good evening!');
      }
    }, []);

    const settingsPressed = () => {
      navigation.navigate('SettingsScreen')
    }

  return (
    <View style={styles.container}>

        <View>

            <Text style={styles.greeting}>{greeting}</Text>

        </View>

        <View style={styles.rightContainer}>

            <TouchableOpacity style={styles.touchableNoLast}>
                <Entypo name="back-in-time" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={settingsPressed}>
                <Ionicons name="settings-outline" size={30} color="white" />
            </TouchableOpacity>

        </View>

    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    greeting: {
        color: 'white', 
        fontSize: 25,
        fontWeight: 'bold'
    },
    rightContainer: {
        flexDirection: 'row',
    },
    touchableNoLast: {
        marginRight: 10
    }
})
