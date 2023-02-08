import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { Component } from 'react';
import { SvgUri } from 'react-native-svg';


export default class Card extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={{ margin: 20, flexDirection: 'row', height: '70%', width: '90%' }}>
                    <View style={styles.iconDiv}>
                        {/* <SvgUri
                            width="100%"
                            height="100%"
                            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                        /> */}
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 20, marginBottom: 5, marginTop: 5 }}>{this.props.name}</Text>
                        <Text style={{ color: '#7c7b83' }}>{this.props.shortName}</Text>
                    </View>
                    <View style={{ width: '20%' }}></View>
                    <View>
                        <Text style={{ color: '#7c7b83', fontSize: 20, marginBottom: 5, marginTop: 5 }}>{this.props.value}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        height: 100,
        width: '100%',
        backgroundColor: '#38373f',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#38373f',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconDiv: {
        height: '100%',
        width: '22%',
        borderRadius: 20,
        backgroundColor: '#242529',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
});
