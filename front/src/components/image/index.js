import React from "react";

class Image extends React.Component {
  render() {
      console.log(this.props.style);
    return (
      <img
        src={this.props.src}
        style={this.props.style}
        width={this.props.width}
        height={this.props.width}
      />
    );
  }
}

export default Image;
