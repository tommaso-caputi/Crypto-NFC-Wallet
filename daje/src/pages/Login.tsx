import React, { useEffect, useState } from 'react';
import { IonButton, IonPage, IonLabel } from '@ionic/react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import MetaMaskSDK from '@metamask/sdk';

const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider();

function Login() {
    const navigate = useNavigate();
    const [address, setAddress] = useState("prova");

    /* useEffect(() => {
        ethereum.on('accountsChanged', () => { navigate("/Menu", { state: { address: address } })});
    }, []); */

    const connect = () => {
        /* ethereum.request({ method: 'eth_requestAccounts', params: [] })
            .then((res: any) => navigate("/menu", { state: { address: res[0] } })); */
        navigate("/menu", { state: { address: "add" } });
    }

    return (
        <IonPage>
            <IonButton onClick={connect}>Connect to Metamask</IonButton>
        </IonPage>
    );
}

export default Login;