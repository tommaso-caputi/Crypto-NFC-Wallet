import { Button, StyleSheet, Text, View } from 'react-native';

import Buttons from './Buttons';

export default function BottomDiv() {
    return (
        <View style={styles.container}>
            <View style={styles.accountDiv}></View>
            <View style={styles.balanceDiv}>
                
            </View>
            <View style={styles.buttonsDiv}>
                <Buttons/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    accountDiv: {
        height: '33%',
        width: '100%'
    },
    balanceDiv: {
        height: '33%',
        width: '100%'
    },
    buttonsDiv: {
        width: '100%',
        height: '35%',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
