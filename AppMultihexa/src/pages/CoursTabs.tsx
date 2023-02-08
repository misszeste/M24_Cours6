import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// Composante  IONIC
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";

// PAGES
import CoursObjectifs from "./CoursObjectifs";
import ListeDesCours from "./ListeDesCours";
import TousLesObjectifs from "./TousLesObjectifs";

// ICONS
import { trophyOutline, list } from "ionicons/icons";


const CoursTabs: React.FC = () => {
    return(
        <IonTabs>
              {/* Route par défault -> path="" */}
            <IonRouterOutlet>
                <Redirect path="/cours" to="/cours/liste" exact/>
                <Switch>
                    {/* Appel de la pages ListeDesCours.tsx */}
                    <Route path="/cours/liste" exact>                   
                        <ListeDesCours/>           
                    </Route>

                    {/* Appel de la pages TousLesObjectifs.tsx */}
                    <Route path="/cours/tous-objectifs" exact>         
                        <TousLesObjectifs/>            
                    </Route> 

                    {/* Appel de la pages CoursObjectifs.tsx */}
                    <Route path="/cours/:coursId">         
                        <CoursObjectifs/>      
                    </Route> 
                </Switch>                      
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton  tab="cours" href="/cours/liste">
                    <IonIcon icon={trophyOutline}/>
                    <IonLabel>Liste des cours</IonLabel>
                </IonTabButton>

                <IonTabButton  tab="tous-objectifs" href="/cours/tous-objectifs">
                    <IonIcon icon={list}/>
                    <IonLabel>Tous les objectifs</IonLabel>
                </IonTabButton>        
            </IonTabBar>
        </IonTabs>
    );
}
export default CoursTabs