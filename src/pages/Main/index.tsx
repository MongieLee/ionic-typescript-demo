import React from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Route } from "react-router";
import { homeSharp, searchSharp, person } from "ionicons/icons";
import Home from "../Home";
import Ground from "../Ground";
import User from "../User";
import MusicDetail from "../MusicDetail";

const Main: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" exact component={Home} />
        <Route path="/ground" component={Ground} />
        <Route path="/user" component={User} />
        <Route path="/home/detail/:id" component={MusicDetail} exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeSharp} />
          <IonLabel>首页</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/ground">
          <IonIcon icon={searchSharp} />
          <IonLabel>发现</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/user">
          <IonIcon icon={person} />
          <IonLabel>个人中心</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Main;
