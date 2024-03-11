import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { logoInstagram, logoFacebook, logoYoutube, archiveSharp, imagesOutline, imagesSharp, personOutline, personSharp, videocamOutline, videocamSharp, chatbubbleOutline, briefcaseOutline, briefcaseSharp, peopleOutline, peopleSharp, banSharp, banOutline, starOutline, starSharp } from 'ionicons/icons';
import './Menu.css';
import LanguageToggle from './LanguageToggle';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Seeking Work',
    url: '/seekingWork',
    iosIcon: briefcaseOutline,
    mdIcon: briefcaseSharp
  },
  {
    title: 'Community',
    url: '/community',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Reviews',
    url: '/reviews',
    iosIcon: starOutline,
    mdIcon: starSharp
  },
  {
    title: 'No Contact',
    url: '/noContact',
    iosIcon: banOutline,
    mdIcon: banSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <LanguageToggle/>
          <IonListHeader>New Roots</IonListHeader>
          <IonNote>Life beyond borders</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} style={{ color: '#fff' }} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
        <IonList id="social-list">
        <IonItem lines="none" href="https://www.instagram.com/kafati_art_studio/?hl=en" target="_blank" detail={false} >
            <IonIcon slot="start" icon={logoInstagram} style={{ color: 'white' }} />
            Instagram
          </IonItem>
          <IonItem lines="none" href="https://www.facebook.com/jaime.kafati.5" target="_blank" detail={false}>
            <IonIcon slot="start" icon={logoFacebook} style={{ color: '#4267B2' }} />
            Facebook
          </IonItem>                                                                                                                                                                                                                                                           
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
