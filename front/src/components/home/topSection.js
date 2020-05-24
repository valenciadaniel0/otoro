import React from "react";
import Image from "../image";
import logo from "../../resources/otoro.png";

class TopSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Image
          src={logo}
          height="50%"
          width="50%"
          style={{ margin: "0 auto" }}
        />
        <h5 style={{ margin: "0 auto" }}>Otoro</h5>
        <h5 style={{ "marginBottom": "0" }}>Iniciar sesión</h5>
        <small>Es genial verte de nuevo!</small>
      </React.Fragment>
    );
  }
}

export default TopSection;
