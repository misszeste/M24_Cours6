import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';



const TousLesObjectifs: React.FC = () => {

      return(
        // Peux juste avoir un retour => devont utiliser un React.Fragment
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Liste des objectifs
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Yeah ! Ca fonctionne la page de tous les objectifs</h2>
            </IonContent>
        </IonPage>
    )
}
export default TousLesObjectifs