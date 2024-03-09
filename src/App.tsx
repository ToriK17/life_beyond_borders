import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { useIsMobile } from './hooks/useIsMobile';
import Menu from './components/Menu';
import Page from './pages/Page';
import seekingWork from './pages/SeekingWork/seekingWork';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import community from './pages/Community/community';
import reviews from './pages/Reviews/reviews';
import noContact from './pages/NoContact/noContact';
import { LanguageProvider } from './components/LanguageContext';
import NavBar from './components/NavBsr/navBar';


setupIonicReact();

const App: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <LanguageProvider>
      <IonApp>
        <IonReactRouter>
          {isMobile ? (
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route exact path="/" component={seekingWork} />
                <Route exact path="/seekingWork" component={seekingWork} />
                <Route exact path="/community" component={community} />
                <Route exact path="/reviews" component={reviews} />
                <Route exact path="/noContact" component={noContact} />
                <Route path="/folder/:name" exact={true} component={Page} />
              </IonRouterOutlet>
            </IonSplitPane>
          ) : (
            <>
            <NavBar />
              <IonRouterOutlet id="main">
                <Route exact path="/" component={seekingWork} />
                <Route exact path="/seekingWork" component={seekingWork} />
                <Route exact path="/community" component={community} />
                <Route exact path="/reviews" component={reviews} />
                <Route exact path="/noContact" component={noContact} />
                <Route path="/folder/:name" exact={true} component={Page} />
              </IonRouterOutlet>
            </>
          )}
        </IonReactRouter>
      </IonApp>
    </LanguageProvider>
  );
};

export default App;
