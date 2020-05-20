import React from "react";
import { IonContent, IonPage } from "@ionic/react";

class Home extends React.Component {
  render() {
    return (
      <IonPage>
        <IonContent>
          <div className="container">
            <div>This is my home!</div>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
