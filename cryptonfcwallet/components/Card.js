import { StyleSheet, Text, View } from 'react-native';

export default function BottomDiv() {
    return (
        <View style={styles.main}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 100,
        width: '100%',
        backgroundColor: '#38373f',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#38373f',
        marginBottom: 10
    }
});
