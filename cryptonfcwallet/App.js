import { StyleSheet, Text, View } from 'react-native';

import BottomDiv from './components/BottomDiv/BottomDiv'
import TopDiv from './components/TopDiv/TopDiv'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topDiv}>
        <TopDiv></TopDiv>
      </View>
      <View style={styles.bottomDiv}>
        <BottomDiv />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#212025',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topDiv: {
    width: '100%',
    height: '40%',
    borderWidth: 3
  },
  bottomDiv: {
    width: '100%',
    height: '61%',
    borderWidth: 3,
    flexDirection: 'column'
  }
});
