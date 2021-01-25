import React from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  logoFacebook,
  logoVimeo,
  logoInstagram,
  logoTwitter,
  share,
} from "ionicons/icons";

const Ground: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>发现</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <IonFab vertical="center" horizontal="center" slot="fixed">
            <IonFabButton>
              <IonIcon icon={share} />
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={logoVimeo} />
              </IonFabButton>
            </IonFabList>
            <IonFabList side="bottom">
              <IonFabButton>
                <IonIcon icon={logoFacebook} />
              </IonFabButton>
            </IonFabList>
            <IonFabList side="start">
              <IonFabButton>
                <IonIcon icon={logoInstagram} />
              </IonFabButton>
            </IonFabList>
            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={logoTwitter} />
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ground;
