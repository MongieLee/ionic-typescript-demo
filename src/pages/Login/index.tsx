import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonPage,
  IonToast,
} from "@ionic/react";
import { RouterProps } from "react-router";
import loginApi from "../../api/login";

interface InputChangeEventDetail {
  value: string | undefined | null;
}

interface UserInfo {
  username: string;
  password: string;
}

const Login: React.FC<RouterProps> = (props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    password: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handelLogin: () => void = () => {
    if (userInfo.password && userInfo.password) {
      setShowLoading(true);
      loginApi
        .login(userInfo)
        .then((response) => {
          setShowLoading(false);
          console.log(response);
        })
        .catch((err) => {
          console.log(`err:${err}`);
          setShowLoading(false);
          props.history.push("/home");
        });
    } else {
      setShowToast(true);
    }
  };

  const handelUsername = (e: CustomEvent<InputChangeEventDetail>) => {
    const username = e.detail.value || "";
    setUserInfo({ ...userInfo, username });
  };

  const handelPassword = (e: CustomEvent<InputChangeEventDetail>) => {
    const password = e.detail.value || "";
    setUserInfo({ ...userInfo, password });
  };

  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            position: "absolute",
            top: "30%",
            width: "100%",
            transform: "translateY(-50%)",
          }}
        >
          <h1 style={{ textAlign: "center" }}>登录系统</h1>
          <IonItem>
            <IonLabel position="stacked">账号：</IonLabel>
            <IonInput
              onIonChange={(e: CustomEvent<InputChangeEventDetail>) =>
                handelUsername(e)
              }
              value={userInfo.username}
            >
              {" "}
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">密码：</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e: CustomEvent<InputChangeEventDetail>) =>
                handelPassword(e)
              }
              value={userInfo.password}
            >
              {" "}
            </IonInput>
          </IonItem>
          <IonButton
            onClick={handelLogin}
            style={{
              marginTop: "20px",
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            expand="block"
          >
            登录
          </IonButton>

          <IonLoading
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={"登录中..."}
            duration={5000}
          />
          <IonToast
            animated
            position={"middle"}
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="账号或密码不能为空！"
            color={"danger"}
            duration={1200}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
