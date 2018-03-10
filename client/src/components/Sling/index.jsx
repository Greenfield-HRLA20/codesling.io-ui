import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io.js';

import Sling from './Sling.jsx';

class SlingIndex extends Component {
  state = {
    socket: null
  };

  componentWillMount() {
    this.socket = io('http://54.183.228.239:4155', {
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
          history={this.props.history}
          socket={this.state.socket}
          challenge={this.props.location.state.challenge}
        />
      );
    } else {
      return (
        <Sling
          history={this.props.history}
          socket={this.state.socket}
          challenge={{}}
        />
      );
    }
  }
}

export default SlingIndex;
