import { StyleSheet, Text, View } from 'react-native';


export default function BottomDiv() {
    return (
        <View style={styles.container}>
            <Text>Bottone 1</Text>
            <Text>Bottone 2</Text>
            <Text>Bottone 3</Text>
            <Text>Bottone 4</Text>
            <Text>Bottone 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
