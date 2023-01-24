import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';



const CoursObjectifs: React.FC =() => {
    return(
        // Peux juste avoir un retour => devont utiliser un React.Fragment
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Objectifs du cours</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Yeah ! Ca fonctionne la page Objectifs du Cours</h2>               
            </IonContent>

        </IonPage>
    )
}
export default CoursObjectifs