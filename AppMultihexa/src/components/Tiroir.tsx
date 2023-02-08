import React from "react";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { list, options } from "ionicons/icons";
const Tiroir: React.FC = () =>{
    return(        
                            
      <IonMenu contentId="main">    
        <IonHeader>
            <IonToolbar>
            <IonTitle>Cours Objectifs</IonTitle>
            </IonToolbar>
        </IonHeader>   
     
        <IonContent>     

          <IonList>                     
            <IonMenuToggle>
              <IonItem button routerLink='/cours/tous-objectifs' routerDirection="none">
                <IonIcon slot='start' icon={list} />
                <IonLabel>Tous les objectifs</IonLabel>
              </IonItem>
            </IonMenuToggle>
            
            <IonMenuToggle>
              <IonItem button routerLink='/filtres' routerDirection="none" >
                <IonIcon slot='start' icon={options}/>
                <IonLabel>Filtres</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent> 
                
    </IonMenu>

    );
};
export default Tiroir;