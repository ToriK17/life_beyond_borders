import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';
import { businessOutline, peopleOutline, starOutline } from 'ionicons/icons';
import SeekingWork from './pages/SeekingWork/seekingWork';
import Community from './pages/Community/community';
import Reviews from './pages/Reviews/reviews';
import { LanguageProvider } from './components/LanguageContext';
import NavBar from './components/NavBsr/navBar';
import { useIsMobile } from './hooks/useIsMobile';

setupIonicReact();

const App: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <LanguageProvider>
      <IonApp>
        <IonReactRouter>
          {isMobile ? (
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/seekingWork">
                  <SeekingWork />
                </Route>
                <Route exact path="/community">
                  <Community />
                </Route>
                <Route exact path="/reviews">
                  <Reviews />
                </Route>
                <Route exact path="/">
                  <Redirect to="/seekingWork" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="seekingWork" href="/seekingWork">
                  <IonIcon icon={businessOutline} />
                  <IonLabel>Seeking Work</IonLabel>
                </IonTabButton>
                <IonTabButton tab="community" href="/community">
                  <IonIcon icon={peopleOutline} />
                  <IonLabel>Community</IonLabel>
                </IonTabButton>
                <IonTabButton tab="reviews" href="/reviews">
                  <IonIcon icon={starOutline} />
                  <IonLabel>Reviews</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          ) : (
            <>
              <NavBar />
              <IonRouterOutlet>
                <Route exact path="/seekingWork">
                  <SeekingWork />
                </Route>
                <Route exact path="/community">
                  <Community />
                </Route>
                <Route exact path="/reviews">
                  <Reviews />
                </Route>
                <Route exact path="/">
                  <Redirect to="/seekingWork" />
                </Route>
              </IonRouterOutlet>
            </>
          )}
        </IonReactRouter>
      </IonApp>
    </LanguageProvider>
  );
};

export default App;
