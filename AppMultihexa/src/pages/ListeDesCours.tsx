import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

// CARD
export const  COURS_DATA = [
    {
        id: 'M14',
        titre: 'Mobile 1 - Kotlin et Android Studio',
        descrition: 'Description du cours mobile 1',
        image:'https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png',
        inscription: new Date("05/18/2023"),
        objectifs:[
            {id: 'm14o1',text:"Débuter avec Android Studio"},
            {id: 'm14o2',text:"Intro à Kotlin "},
            {id: 'm14o3',text:"Kotlin avancé"},
            {id: 'm14o4',text:"Débuter avec Android Studio"},
            {id: 'm14o5',text:"Intro à Kotlin "},
            {id: 'm14o6',text:"Kotlin avancé"},
            {id: 'm14o7',text:"Débuter avec Android Studio"},
            {id: 'm14o8',text:"Intro à Kotlin "},
            {id: 'm14o9',text:"Kotlin avancé"},
            {id: 'm1410',text:"Débuter avec Android Studio"},
            {id: 'm1411',text:"Intro à Kotlin "},
            {id: 'm1412',text:"Kotlin avancé"},
            {id: 'm1413',text:"Débuter avec Android Studio"},
            {id: 'm1414',text:"Intro à Kotlin "},
            {id: 'm1415',text:"Kotlin avancé"},
            {id: 'm1416',text:"Débuter avec Android Studio"},
            {id: 'm1417',text:"Intro à Kotlin "},
            {id: 'm1418',text:"Kotlin avancé"},
            {id: 'm1419',text:"Débuter avec Android Studio"},
            {id: 'm1420',text:"Intro à Kotlin "},
            {id: 'm1421',text:"Kotlin avancé"},
            {id: 'm1422',text:"Débuter avec Android Studio"},
            {id: 'm1423',text:"Intro à Kotlin "},
            {id: 'm1424',text:"Kotlin avancé"}                
        ]
       
    },
    {
        id: 'M24', 
        titre:'Mobile 2 - Avec Ionic et Réact ',
        descrition: 'Description du cours mobile 2',
        image:'https://ionicframework.com/img/meta/ionic-react-og.png',
        inscription: new Date("07/08/2024"),        
        objectifs:[
            {id: 'm24o1',text:"Débuter avec Ionic "},
            {id: 'm24o2',text:"Intro à Réact "},
            {id: 'm24o3',text:"Ionic & Réact : Avancé"},
            {id: 'm24o4',text:"Débuter avec Ionic "},
            {id: 'm24o5',text:"Intro à Réact "},
            {id: 'm24o6',text:"Ionic & Réact : Avancé"},
            {id: 'm24o7',text:"Débuter avec Ionic "},
            {id: 'm24o8',text:"Intro à Réact "},
            {id: 'm24o9',text:"Ionic & Réact : Avancé"},
            {id: 'm2410',text:"Débuter avec Ionic "},
            {id: 'm2411',text:"Intro à Réact "},
            {id: 'm2412',text:"Ionic & Réact : Avancé"}
        ]
    },
    {
        id: 'W34',
        titre:'PHP E-Commerce',
        descrition: 'Description du cours mobile 3',
        image:'https://p-arasteh.org/wp-content/uploads/2020/06/php.jpg',
        inscription: new Date("01/10/2025"),
        objectifs:[
            {id: "w34o1",text:"PHP pour les nuls"},
            {id: "w34o2",text:"Intro à PHP "},
            {id: "w34o3",text:"PHP avancé"},
            {id: "w34o4",text:"PHP pour les nuls"},
            {id: "w34o5",text:"Intro à PHP "},
            {id: "w34o6",text:"PHP avancé"},
            {id: "w34o7",text:"PHP pour les nuls"},
            {id: "w34o8",text:"Intro à PHP "},
            {id: "w34o9",text:"PHP avancé"},
            {id: "w3410",text:"PHP pour les nuls"},
            {id: "w3411",text:"Intro à PHP "},
            {id: "w3412",text:"PHP avancé"},
        ]
        
    },
];

const ListeDesCours: React.FC = () => {

      return(
      
        // Peux juste avoir un retour => devont utiliser un React.Fragment
        <IonPage>
            {/* HEADER */}
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste des cours</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* CONTENT */}
            <IonContent>
                <IonGrid>
                    {COURS_DATA.map(cours => (
                        <IonRow key={cours.id}>
                            <IonCol>
                                <IonCard>
                                    <IonCardHeader className='ion-text-center'>
                                        <IonCardTitle>{ cours.titre}</IonCardTitle>
                                        <IonCardSubtitle>Inscrit le : &nbsp; 
                                            {cours.inscription.toLocaleDateString("fr-CA", {
                                                year:"numeric",
                                                month:"long",
                                                day:"numeric"
                                            })} 
                                        </IonCardSubtitle>
                                    </IonCardHeader>

                                    <IonCardContent className='ion-text-center'>
                                        <IonImg src={cours.image}/>
                                        <p>{cours.descrition}</p> 
                                         {/* ne pas oublier le ` */}
                                        <IonButton routerLink={`/cours/${cours.id}`}>VOIR LES OBJECTIFS</IonButton>                                      
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}                    
                </IonGrid>                 
            </IonContent>
        </IonPage>
    );
};
export default ListeDesCours