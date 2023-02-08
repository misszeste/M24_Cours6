import React from "react";
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCol, IonGrid, IonInput, IonLabel, IonRow } from "@ionic/react";


const ModifierModal: React.FC<{
    show: boolean; 
    onCancel: () => void;
    modifierObjectif: { id: string, text: string} | null;
}>= props => {

    return(       
        <IonModal isOpen={props.show}>  
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{props.modifierObjectif ? "Modifier" : "Ajouter"} Un objectif</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel position="floating">Objectif</IonLabel>
                                <IonInput type="text" value={props.modifierObjectif?.text}></IonInput>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonButton color="primary" onClick={props.onCancel}>Annuler</IonButton>
                            </IonCol> 
                            <IonCol>
                                <IonButton color="success">Sauvegarder</IonButton>  
                            </IonCol>             
                        </IonRow>
                    </IonGrid>            
                </IonContent>
        </IonModal>
    );    
};

export default ModifierModal;