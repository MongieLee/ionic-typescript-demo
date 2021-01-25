import React from "react";
import { IonAvatar, IonButton, IonContent, IonPage } from "@ionic/react";
import { RouterProps } from "react-router";

const User: React.FC<RouterProps> = (props) => {
  const handelLogout = () => {
    props.history.push("/login");
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IonAvatar
            style={{ width: `150px`, height: "150px", margin: "110px 0 40px" }}
          >
            <img
              alt="头像"
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3510986481,3852924315&fm=11&gp=0.jpg"
            />
          </IonAvatar>
          <IonButton color={"dark"} onClick={handelLogout}>
            注销
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default User;
