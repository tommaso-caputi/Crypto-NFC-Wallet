import React, { useEffect } from 'react';
import { IonButton } from '@ionic/react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {

    }, []);
    const onSubmit = async (event: any) => {
        navigate('/Menu');
    };

    return (
        <div>
            <IonButton type='submit' >dasdca</IonButton>
        </div>
    );
}

export default Login;
