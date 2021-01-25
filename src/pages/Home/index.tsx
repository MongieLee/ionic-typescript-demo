import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonThumbnail,
} from "@ionic/react";
import { RouterProps } from "react-router";
import Data from "../../mock/musicList";
import Skeleten from "../../components/Skeleten";
const Home: React.FC<RouterProps> = (props) => {
  const [musicList, setMusicList] = useState<any[]>([]);
  useEffect(() => {
    //页面挂载后请求数据
    setTimeout(() => {
      setMusicList(Data);
    }, 1400);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>网易云音乐热歌榜</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonContent>
            {musicList && musicList.length > 0 ? (
              musicList.map((item, index) => {
                return (
                  <IonItem
                    key={item.title}
                    onClick={() => props.history.push("/home/detail/test")}
                    button
                  >
                    <IonThumbnail slot="start">
                      <img alt="头像" src={item.image} />
                    </IonThumbnail>
                    <IonLabel>
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                    </IonLabel>
                  </IonItem>
                );
              })
            ) : (
              <Skeleten />
            )}
          </IonContent>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
