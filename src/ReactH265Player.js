import React, { Component } from "react";

class ReactH265Player extends Component {
  ref = React.createRef();
  player = new window.Player();
  state = {
    width: this.props.width,
    height: this.props.height
  };

  componentDidMount() {
    // console.log(this.ref.current);
    const {
      passRef,
      url = "",
      bufferSize = 512 * 1024,
      isStream = false,
      errorHandler
    } = this.props;
    if (passRef) {
      passRef(this.player);
    }
    this.player.play(url, this.ref.current, errorHandler, bufferSize, isStream);
  }

  componentWillUnmount() {
    this.player.stop();
  }

  render() {
    const { width, height } = this.state;
    return <canvas ref={this.ref} width={width} height={height}></canvas>;
  }
}

export default ReactH265Player;
