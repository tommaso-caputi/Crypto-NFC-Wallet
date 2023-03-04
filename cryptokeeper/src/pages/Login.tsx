import { IonPage, IonButton, IonList, IonLabel, IonItem } from '@ionic/react';
import MetaMaskSDK from '@metamask/sdk';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

const Login: React.FC = (props) => {
  const navigate = useNavigate();
  const connect = async () => {
    ethereum.request({ method: 'eth_requestAccounts', params: [] })
    .then(navigate('/Menu'));
  }
  
  /* useEffect(() => {
    window.ethereum.on("accountsChanged",() => {
      history.push('/Menu')
    });
  }, []); */

  return (
    <IonPage style={style.container}>
      <IonButton onClick={connect}>Connect to Metamask</IonButton>
      <IonLabel>{}</IonLabel>
    </IonPage>
  );
};

const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Login;
