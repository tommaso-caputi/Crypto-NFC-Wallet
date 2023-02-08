import {
    StyleSheet, Text, View,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import Card from './Card';
import React, { Component } from 'react';


export default class BottomDiv extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.data}>
                    <Text style={styles.text}>List</Text>

                </View>
                <View style={{ flex: 1 }} />
                <SafeAreaView style={styles.scrollArea}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Card name="Bitcoin" shortName="BTC" value="$560" />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 15,
        flexDirection: 'column'
    },
    data: {
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        fontSize: 20,
        color: '#ffffff'
    },
    scrollArea: {
        height: '94%',
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30
    }
});
