import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';



const ListeDesCours: React.FC = () => {

    const historique = useHistory();
    // creer un evenement 
    const handlerChangerPage = () => {
        historique.push('/cours-objectifs');
    }

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
                <h2>Yeah ! Ca fonctionne la page Liste de Cours</h2>
                <div>
                    {/* 2e facon de faire un btn routeur en utilisant routerLink */}
                    {/* <IonButton routerLink ="/cours-objectifs">Exemple 2 de retour</IonButton> */}
                    <IonButton onClick={handlerChangerPage}>
                        Cours Objectifs
                    </IonButton> 
                    <div>
                        {/* 2e facon de faire un btn routeur en utilisant une methode useRoute
                        dans ListeDesCoursCopy */}
                        {/* <IonButton routerLink ="/cours-objectifs">Cours Objectifs</IonButton>  */}
                     </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default ListeDesCours