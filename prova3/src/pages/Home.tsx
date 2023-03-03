import { IonButton, IonText } from '@ionic/react';
import './Home.css';
import MetaMaskSDK from '@metamask/sdk';
import { SetStateAction, useEffect, useState } from 'react';

const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider();

const Home: React.FC = () => {
  const [address, setAddress] = useState("address");

  const connect = async () => {
    ethereum.request({
      method: "eth_requestAccounts",
      params: [],
    });
  };

  useEffect(() => {
    window.ethereum.on("accountsChanged", (address: SetStateAction<string>[]) => {
      console.log(address);
      setAddress(address?.[0]);
    });
  }, []);

  return (
    <>
      <IonButton onClick={connect}>prova</IonButton>
      <IonText>{address}</IonText>
    </>
  );
};

export default Home;
