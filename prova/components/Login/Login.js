import React, { Component } from "react";
import { Button, View, Text, Linking } from "react-native";
import MetaMaskSDK from '@metamask/sdk';
import BackgroundTimer from 'react-native-background-timer';

export default function Login({ navigation }){

  const ciao = () => {
    //navigation.navigate('Logged')
  };

  //const MMSDK = new MetaMaskSDK();
  //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={ciao} />
    </View>
  );
}