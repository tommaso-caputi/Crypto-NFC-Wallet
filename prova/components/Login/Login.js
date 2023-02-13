import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default function Login({ navigation }) {

    const ciao = () => {
        navigation.navigate('Logged')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Login"
                onPress={ciao}
            />
        </View >
    );

}