import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleHomeClick = () => {
    this.props.history.push("/home");
  };

  handleHistoryClick = () => {
    this.props.history.push("/history");
  };

  handleLogoutClick = () => {
    this.props.history.push("/login");
    // TODO: Log user out of current session
  };

  render() {
    return (
      <nav className="editor-navbar" style={{ margin: "15px" }}>
        <ul>
          <li onClick={this.handleHomeClick}>Home</li>
          <li onClick={this.handleHistoryClick}>Challenge History</li>
          <li onClick={this.handleLogoutClick}>Logout</li>
        </ul>
      </nav>
    );
  }
}
