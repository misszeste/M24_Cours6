import { IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { trashBin, build } from "ionicons/icons";
import React from "react";

const ObjectifModifiable: React.FC<{
    slidinfRef: React.Ref<HTMLIonItemSlidingElement>;
    debuterSupppression: () => void;
    debuterModification: (event: React.MouseEvent) => void;
    text: string;
}> = props => {

    return( 
        <React.Fragment>      
            <IonItemSliding ref={props.slidinfRef}>
                {/* slide coté gauche */}
                <IonItemOptions side="start">
                    <IonItemOption onClick={props.debuterSupppression} color="danger">
                        <IonIcon  slot= "icon-only" icon={trashBin}/>
                    </IonItemOption>                                    
                </IonItemOptions> 

                <IonItem lines='full'>
                    <IonLabel>{props.text}</IonLabel>  
                </IonItem>

                
                {/* slide coté droit */}
                <IonItemOptions side="end">
                    <IonItemOption onClick={props.debuterModification} color="warning">
                        <IonIcon slot= "icon-only" icon={build}/>
                    </IonItemOption>                                    
                </IonItemOptions> 

            </IonItemSliding>
        </React.Fragment>
    );     

};
   



export default ObjectifModifiable;