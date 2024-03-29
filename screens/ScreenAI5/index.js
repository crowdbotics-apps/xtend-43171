import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Image, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} /></Pressable>
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => console.log('Sign Up Pressed')} />
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI8");
      }}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI7");
      }}>
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  linksContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10
  }
});
export default SignUpScreen;