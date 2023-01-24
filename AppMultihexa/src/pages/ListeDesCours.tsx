import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';



const ListeDesCours: React.FC = () => {

      return(
      
        // Peux juste avoir un retour => devont utiliser un React.Fragment
        <IonPage>
            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Liste des cours
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Yeah ! Ca fonctionne la page Liste des Cours</h2>
                <div>
                    {/* 2e facon de faire un btn routeur en utilisant une methode useRoute
                     dans ListeDesCoursCopy */}
                    <IonButton routerLink ="/cours-objectifs">Cours Objectifs</IonButton> 
                </div>
            </IonContent>
        </IonPage>
    );
};
export default ListeDesCours