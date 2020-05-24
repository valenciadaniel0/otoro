import React from "react";
import { IonButton, IonIcon, IonContent } from "@ionic/react";

const PrimaryButton = (props) => {
  return (
    <IonButton
      color="primary"
      type={props.isSubmit ? "submit" : "button"}
      onClick={props.onClick}
    >
      {props.text}
    </IonButton>
  );
};

export default PrimaryButton;
