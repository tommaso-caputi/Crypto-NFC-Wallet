import React, { useEffect } from 'react';
import { IonButton } from '@ionic/react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import MetaMaskSDK from '@metamask/sdk';

const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider();

function Login() {
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const connect = () => {
        ethereum.request({ method: 'eth_requestAccounts', params: [] })
            .then((res: any) => navigate("/menu", { state: { address: res[0] } }));
    }

    return (
        <>
            <IonButton onClick={connect}>Connect to Metamask</IonButton>
        </>
    );
}

export default Login;