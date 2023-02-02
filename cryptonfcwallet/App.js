import { StyleSheet, Text, View } from 'react-native';

import Buttons from './components/Buttons'
import Balance from './components/Balance'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleDiv}><Text style={styles.title}>Crypto Keeper</Text></View>
      <View style={styles.balanceDiv}><Balance /></View>
      <View style={styles.centerDiv}></View>
      <View style={styles.buttonsDiv}><Buttons /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#78b5ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#154C79'
  },
  titleDiv: {
    width: '100%',
    height: '15%',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceDiv: {
    width: '100%',
    height: '10%',
    backgroundColor: '#013ca4'
  },
  centerDiv: {
    width: '100%',
    height: '60%'
  },
  buttonsDiv: {
    width: '100%',
    height: '15%',
    justifyContent: 'center'
  }
});
