import { IonPage, IonButton, IonList, IonLabel, IonItem } from '@ionic/react';

const Menu: React.FC = () => {

  return (
    <IonPage style={style.container}>
      <IonLabel>address</IonLabel>
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

export default Menu;
