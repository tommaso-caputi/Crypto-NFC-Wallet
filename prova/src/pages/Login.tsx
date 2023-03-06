import React, { useEffect } from 'react';
import { IonButton } from '@ionic/react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        
    }, []);

    const connect = () => {
        navigate("/menu");
    }

    return (
        <>
            <IonButton onClick={connect}>Connect to Metamask</IonButton>
        </>
    );
}

export default Login;
