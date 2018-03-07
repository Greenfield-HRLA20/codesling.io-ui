import React, { Component } from "react";
import io from "socket.io-client/dist/socket.io.js";

import Sling from "./Sling.jsx";

class SlingIndex extends Component {
  state = {
    socket: null
  };

  componentWillMount() {
    this.socket = io("http://localhost:4155", {
      query: {
        roomId: this.props.location.pathname.slice(1)
      }
    });

    this.setState({ socket: this.socket });
  }

  render() {
    if (this.props.location.state) {
      return (
        <Sling
<<<<<<< HEAD
          socket={this.state.socket}
          challenge={this.props.location.state.challenge}
          history={this.props.history}
=======
          history={this.props.history}
          socket={this.state.socket}
          challenge={this.props.location.state.challenge}
>>>>>>> [fix] add navigation to Duel page
        />
      );
    } else {
      return (
        <Sling
<<<<<<< HEAD
          socket={this.state.socket}
          challenge={{}}
          history={this.props.history}
=======
          history={this.props.history}
          socket={this.state.socket}
          challenge={{}}
>>>>>>> [fix] add navigation to Duel page
        />
      );
    }
  }
}

export default SlingIndex;
