import { IonPage, IonLabel, IonItem, IonCard, IonContent } from '@ionic/react';
import { useLocation } from 'react-router-dom';


const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonPage>
      <IonLabel>{location.state.address}</IonLabel>
      <IonContent style={{innerHeight:50, backgroundColor: '#194D33'}}></IonContent>
    </IonPage>
  );
};


const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fafafa',
    margin: 10,
  },
  prova: {
    backgroundColor: '#5f9ea0'
  },
  prova2: {
  }
};

export default Menu;
