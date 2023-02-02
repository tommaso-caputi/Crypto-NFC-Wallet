import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image } from 'react-native';

export default function balance() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>----</Text>
            <Pressable style={styles.button} >
                <Text style={styles.text}></Text>
            </Pressable>
            <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity={0.5}>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
                    }}
                    style={styles.buttonImageIconStyle}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 40,
        color: '#000000',
        fontWeight: 'bold'
    },



    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});
