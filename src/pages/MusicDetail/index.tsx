import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import data1 from "../../mock/musicDetail";

const Ground: React.FC = () => {
  console.log(data1);
  const [data, setData] = useState<{
    image: string;
    title: string;
    content: string;
  } | null>(null);
  useEffect(() => {
    setData(data1);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="返回" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: "0 1em" }}>
          {data && (
            <div>
              <IonAvatar
                style={{
                  width: `150px`,
                  height: "150px",
                  margin: "10px auto 40px",
                }}
              >
                <img alt="头像" src={data.image} />
              </IonAvatar>
              <h3 style={{ marginLeft: `10px` }}>歌手简介</h3>
              <section style={{ textIndent: "2em" }}>{data.title}</section>
              <h3 style={{ marginLeft: `10px` }}>创作背景</h3>
              <section style={{ textIndent: "2em" }}>{data.content}</section>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ground;
