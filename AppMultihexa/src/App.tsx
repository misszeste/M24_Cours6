
import { IonApp,IonRouterOutlet, IonIcon,IonTabBar, IonTabButton, setupIonicReact, IonLabel, IonTabs } from '@ionic/react';
import ListeDesCours from './pages/ListeDesCours';
import CoursObjectifs from './pages/CoursObjectifs';
import TousLesObjectifs from './pages/TousLesObjectifs';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';

// Pour la gestion des icons
import {list, trophyOutline} from 'ionicons/icons'


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
import './theme/theme.css'




setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

          {/* Route pas défautl -> path="" */}
          <Route path="/" exact>
            {/* Appel de la pages ListeDesCours.tsx */}
            <ListeDesCours/>           
          </Route>

          <Route path="/cours-objectifs" exact>
            {/* Appel de la pages CoursObjectifs.tsx */}
            <CoursObjectifs/>      
          </Route> 

          {/* Appel de la pages TousLesObjectifs.tsx */}
          <Route path="/tous-objectifs" exact>         
            <TousLesObjectifs/>            
          </Route> 

          <Redirect to="/cours" />
          
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton  tab="tous-objectifs" href='/tous-objectifs'>
            <IonIcon icon={list}/>
            <IonLabel>Tous les objectifs</IonLabel>
          </IonTabButton>

          <IonTabButton  tab="cours" href='/cours'>
            <IonIcon icon={trophyOutline}/>
            <IonLabel>Cours</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
