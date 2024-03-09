import React, { useEffect, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logoInstagram, logoFacebook, logoYoutube } from 'ionicons/icons';
import './navbar.scss';

const NavBar: React.FC = () => {
  const history = useHistory();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = (path: string) => history.push(path);

  return (
    <IonHeader>
      <IonToolbar className="custom-toolbar">
      <a href="/seekingWork" className="toolbar-title">New Roots</a>
        {!isSmallScreen && (
          <div className="navbar-content">
            <div className="navbar-links">
              <IonButton fill="clear" onClick={() => navigate('/seekingWork')}>Seeking Work</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/community')}>Community</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/reviews')}>Reviews</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/noContact')}>No Contact</IonButton>
            </div>
            <div className="social-links">
              <IonButton fill="clear" href="https://www.instagram.com/kafati_art_studio/?hl=en" target="_blank">
                <IonIcon icon={logoInstagram} style={{ color: 'white' }} />
              </IonButton>  
              <IonButton fill="clear" href="https://www.facebook.com/jaime.kafati.5" target="_blank">
                <IonIcon icon={logoFacebook} style={{ color: 'royalblue' }} />
              </IonButton>
              <IonButton fill="clear" href="https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg" target="_blank">
                <IonIcon icon={logoYoutube} style={{ color: 'red' }} />
              </IonButton>
            </div>
          </div>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
