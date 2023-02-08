import { Button, StyleSheet, Text, View } from 'react-native';

import Buttons from './Buttons';

export default function BottomDiv() {
    return (
        <View style={styles.container}>

            <View style={{ height: '33%', width: '100%', paddingTop: 50 }}>
                <View style={styles.accountDiv}></View>
            </View>
            <View style={styles.balanceDiv}>
                <Text style={styles.balanceText}>$50,420.03</Text>
                <View style={styles.statusView}>
                    <Text style={styles.statusText}>+5.25%  </Text>
                    <Text style={styles.statusText}>|</Text>
                    <Text style={styles.statusText}>  +$642.26</Text>
                </View>
            </View>


            <View style={styles.buttonsDiv}>
                <Buttons />
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
        height: '100%',
        width: '20%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20
    },
    buttonsDiv: {
        width: '100%',
        height: '35%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    balanceDiv: {
        height: '33%',
        width: '100%',
        alignItems: 'center'
    },
    balanceText: {
        fontSize: 42,
        color: '#d5d5d6',
        marginBottom: 6
    },
    statusView: {
        borderColor: '#caf99e',
        height: '25%',
        width: '40%',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#caf99e',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
    }
});
