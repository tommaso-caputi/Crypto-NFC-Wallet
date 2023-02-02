import { StyleSheet, Text, View } from 'react-native';

export default function BottomDiv() {
    return (
        <View style={styles.container}>
            <View style={styles.accountDiv}></View>
            <View style={styles.balanceDiv}></View>
            <View style={styles.buttonsDiv}></View>
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
        width: '100%',
        borderWidth: 1
    },
    balanceDiv: {
        height: '33%',
        width: '100%',
        borderWidth: 1
    },
    buttonsDiv: {
        width: '100%',
        borderWidth: 1
    }
});
