import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Buttons() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonSend}>
                <Text style={styles.text}>Send</Text>
            </Pressable>
            <Pressable style={styles.buttonReceive}>
                <Text style={styles.text}>Receive</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 40,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    buttonSend: {
        height: '70%',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'black',
    },
    buttonReceive: {
        height: '70%',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
