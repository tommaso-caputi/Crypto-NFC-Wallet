import React, { Component } from 'react';
import { IonButton, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();

    return (
        <>
            <IonLabel>{location.state.address}</IonLabel>
        </>
    );

}

export default Menu;
