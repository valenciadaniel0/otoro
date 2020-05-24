import Menu from "./components/Menu";
import { connect } from "react-redux";
import { persistStore } from "redux-persist";
import store from "./components/core/redux/store";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/home";

class App extends React.Component {
  componentDidMount() {
    persistStore(store, undefined, () => {
      console.log("callback::");
    });
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" component={Home} exact />
              <Redirect to="/" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    loggedUser: state.auth.loggedUser,
  };
};
export default connect(mapStateToProps, {})(App);
