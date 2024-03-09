import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { LanguageContext } from '../../components/LanguageContext';
import { useContext } from 'react';
import translations from './translations.json';

interface Translations {
  [key: string]: {
    title: string;
  };
}


const reviews: React.FC = () => {
const { language } = useContext(LanguageContext);
const message = (translations as Translations)[language].title;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Reviews</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{message}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default reviews;
