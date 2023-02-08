import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import CommuntyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';

export default function BottomDiv() {

    /* const buttons = ['Receive', 'Send', 'Swap', 'Buy', 'Sell',
        'arrow-bottom-left', 'arrow-top-right', 'swap',
        'arrow-bottom-left', 'arrow-bottom-left'] */

    const buttons = {
        'Receive':<CommuntyIcon name="arrow-bottom-left" size={30} color="#252429"></CommuntyIcon>,
        'Send': <CommuntyIcon name="arrow-top-right" size={30} color="#252429"></CommuntyIcon>,
        'Swap': <Icon name="swap" type='ant-design' size={30} color="#252429"></Icon>,
        'Buy': <CommuntyIcon name="tag-arrow-up-outline" size={30} color="#252429"></CommuntyIcon>,
        'Sell': <CommuntyIcon name="tag-arrow-down-outline" size={30} color="#252429"></CommuntyIcon>
    }

    var buttonsRender = []
    for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttonsRender.push(
            <View style={styles.buttonDiv}>
                <Pressable style={styles.iconDiv}>
                    {buttons[Object.keys(buttons)[i]]}
                </Pressable>
                <Text style={{ color: '#d5d5d6' }}>{Object.keys(buttons)[i]}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                {buttonsRender}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scroll: {
    },
    buttonDiv: {
        height: 90,
        width: 68,
        flexDirection: 'column',
        marginLeft: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconDiv: {
        height: '70%',
        width: '100%',
        borderColor: '#0000ff',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#d5d5d6',
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
