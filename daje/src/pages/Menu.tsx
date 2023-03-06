import { IonPage, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router-dom';


const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonPage>
      <IonLabel>{location.state.address}</IonLabel>
    </IonPage>
  );
};

export default Menu;
