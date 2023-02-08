import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";


const Filtres: React.FC = () => {
    return(
        <IonPage>
            {/* Header */}
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle> Filtre </IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* Contenu */}
            <IonContent>
                <h2> La page des filtres </h2>
            </IonContent>
        </IonPage>
    );
}
export default Filtres