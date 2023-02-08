import React from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { COURS_DATA } from './ListeDesCours';

const TousLesObjectifs: React.FC = () => {

    const objectifs = COURS_DATA.map(cours => {
        return cours.objectifs.map( objectif =>{
            return{ ...objectif, coursTitre: cours.titre}
        });

    }).reduce((objectifArr, nestedObjectif) => {
        let objectifArrAJour = objectifArr;
        for(const objectif of nestedObjectif){
            objectifArrAJour = objectifArrAJour.concat(objectif);
        }
        return objectifArrAJour;

    },[]);

      return(
        // Peux juste avoir un retour => devont utiliser un React.Fragment
        <IonPage>

            {/* HEADER */}
            <IonHeader>
                <IonToolbar>                  
                        <IonButtons slot='start'>
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>Liste des objectifs</IonTitle>                                     
                </IonToolbar>
            </IonHeader>

            {/* Content */}
            <IonContent>
                <IonList>
                    {objectifs.map(objectif => (
                        <IonItem key={objectif.id}>
                            <IonLabel>
                                <h3>{objectif.text}</h3>
                                <p>{objectif.coursTitre}</p>
                            </IonLabel>                           
                        </IonItem>
                    ))}
                </IonList>
               
            </IonContent>
            
        </IonPage>
    );
};
export default TousLesObjectifs