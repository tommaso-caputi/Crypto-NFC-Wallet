import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import * as React from 'react';
import {Button, Platform} from 'react-native';

function App(): JSX.Element {
  const connector = useWalletConnect();
  if (!connector.connected) {
    return <Button title="Connect" onPress={() => connector.connect()} />;
  }
  return <Button title="Kill Session" />;
}

export default withWalletConnect(App, {
  redirectUrl:
    Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
