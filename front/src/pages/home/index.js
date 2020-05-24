import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../components/core/redux/actions";
import LoginForm from "../../components/home/loginForm";
import { IonContent, IonPage, IonRow, IonGrid } from "@ionic/react";
import TopSection from "../../components/home/topSection";

class Home extends React.Component {
  onSubmit = (formValues) => {
    this.props.signIn(formValues);
  };

  render() {
    return (
      <IonPage>
        <IonContent padding>
          <IonGrid>
            <IonRow
              justify-content-center
              align-items-center
              style={{ height: "100%", flexDirection: "column" }}
            >
              <TopSection />
              <LoginForm onSubmit={this.onSubmit} />
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.payload,
  };
};

export default connect(mapStateToProps, { signIn })(Home);
