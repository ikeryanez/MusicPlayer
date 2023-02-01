import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { View, Text } from '../components/Themed'
import Colors from '../constants/Colors'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const navigation = useNavigation();

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) =>{
            const user = userCredential.user;
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) =>{
            const user = userCredential.user;
            navigation.navigate('TabOneScreen')
        })
        .catch(error => {
            console.log(error);
            Alert.alert(error.message)
        })
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source = {require('./logo.png')} style={styles.logo}/>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='password'
                value={pwd}
                onChangeText={text => setPwd(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={handleLogin}
            style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleRegister}
            style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    inputContainer: {
        width: '80%',
        color: 'white'
    },
    input: {
        backgroundColor: Colors.grey,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 10
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: Colors.green,
        width: '100%',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOutline: {

    },
    buttonOutlineText: {

    },
    logo: {
        width: 300,
        height: 300
    }
});