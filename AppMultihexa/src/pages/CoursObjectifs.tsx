import React, { useRef, useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonList, IonPage, IonTitle, IonToast, IonToolbar, isPlatform } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { COURS_DATA } from './ListeDesCours';
import { addOutline } from 'ionicons/icons';
import ModifierModal from '../components/ModifierModal';
import ObjectifModifiable from '../components/ObjectifModifiable';


const CoursObjectifs: React.FC =() => {

    const [debuterSupprimer, setDebuterSupprimer] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [debuterModifier,setDebuterModifier] = useState(false);
    const [objectifSelectionner, setObjectifSelectionner] = useState<any>();

    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

    const coursChoisiId = useParams<{coursId: string}>().coursId;
    const courChoisi = COURS_DATA.find(c => c.id === coursChoisiId);

    
    //Débuter Supprimer
    const debuterSupprimerObjectifHandler = () => {
        setDebuterSupprimer(true);
        // console.log("Débuter supprimer");
    }

    //Débuter Supprimer
    const supprimerObjectifHandler = () => {
        setDebuterSupprimer(false)
        // console.log("Objectif Supprimer...");
        setToastMessage("Objectif Supprimé");
    }

    //Annuler Supprimer
    const annulerSupprimerObjectifHandler = () => {
        setDebuterSupprimer(false);
    }

    //Débuter Modifier    
    const debuterModifierObjectifHandler = ( objectifId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        const objectif = courChoisi?.objectifs.find(o => o.id === objectifId)
        slidingOptionRef.current?.closeOpened();
        if(!objectif){
            return;
        }

        setDebuterModifier(true);
        // console.log("Débuter Modifier...");
        setObjectifSelectionner(objectif);
    }

    //Annuler Modifier
    const annulerModifierObjectifHandler = () =>{
        setDebuterModifier(false);
        setObjectifSelectionner(null);
    }

    //Débuter Ajouter
    const debuterAjouterObjectifHandler = (event: React.MouseEvent) => {
        // event.stopPropagation();
        slidingOptionRef.current?.closeOpened();
        setDebuterModifier(true)
        // console.log("Débuter ajouter...");
        
    }


    return(
        // Peut juste avoir un retour => devont utiliser un React.Fragment
        <React.Fragment>
            {/* IonModal */}
           <ModifierModal
                show={debuterModifier}
                onCancel={annulerModifierObjectifHandler}
                modifierObjectif={objectifSelectionner}
           />
            {/*IonToast  */}
            <IonToast
                isOpen={!!toastMessage}
                message={toastMessage}
                duration={2000}
                onDidDismiss={() => {
                    setToastMessage('');
                }}
            />

            {/* IonAlert */}
            <IonAlert
                isOpen={debuterSupprimer} 
                header="Êtes-vous certain ?"
                message="Voulez-vous effacer cet objectifs ? "
                buttons={[
                    {                        
                        text: 'Non',
                        role: 'Cancel',
                        handler: () => {
                            setDebuterSupprimer(false);
                        }
                    },
                    {
                        text: 'Oui',
                        handler: supprimerObjectifHandler 
                
                    }                    
                ]}     
            />                                 


            <IonPage>
                {/* HEADER */}
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref="/cours/liste"/>
                        </IonButtons>
                        <IonTitle>{courChoisi ? courChoisi.titre : "Aucun cours trouvé !"}</IonTitle>

                        {isPlatform("ios") && (
                            <IonButtons slot='end'>
                                <IonButton onClick={debuterAjouterObjectifHandler}>
                                    <IonIcon slot="icon-only" icon={addOutline}/>
                                </IonButton>
                            </IonButtons>
                        )}
                        
                    </IonToolbar>
                </IonHeader>

                {/* CONTENT */}
                <IonContent>
                    {/* Selon le cours choisi sort moi la liste de ... */}
                    {courChoisi && <IonList>
                        {
                            courChoisi.objectifs.map(objectif => (
                                <ObjectifModifiable 
                                key={objectif.id}
                                slidinfRef={slidingOptionRef}
                                debuterModification={debuterModifierObjectifHandler.bind(null, objectif.id)}
                                debuterSupppression={debuterSupprimerObjectifHandler}
                                text={objectif.text}
                                />                                
                            ))
                        }                   
                    </IonList>}  

                    {/* !isPLatform  est la negation : N'est pas X  */}
                    {isPlatform("android") && (
                        <IonFab slot="fixed" horizontal='end' vertical="bottom">
                        <IonFabButton color="light" onClick={debuterAjouterObjectifHandler}>
                            <IonIcon icon={addOutline}/>
                        </IonFabButton>
                    </IonFab>
                    )}                                            
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
export default CoursObjectifs