import React, { Component } from 'react';
import axios from 'axios';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleFriendsClick = this.handleFriendsClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleHomeClick = () => {
    this.props.history.push('/home');
  };

  handleFriendsClick = () => {
    this.props.history.push('/friends');
  };

  handleAllUsersClick = () => {
    this.props.history.push('/allUsers');
  };

  handleHistoryClick = () => {
    this.props.history.push('/history');
  };

  handleLogoutClick = async () => {
    try {
      await axios.get('http://54.183.228.239:3396/api/auth/logout');
      delete localStorage.email;
      delete localStorage.id;
      delete localStorage.token;
      this.props.history.push('/');
    } catch (err) {
      return console.log(err);
    }
  };

  render() {
    return (
      <nav className="editor-navbar" style={{ margin: '15px' }}>
        <ul>
          <li onClick={this.handleHomeClick}>Home</li>
          <li onClick={this.handleFriendsClick}>Friends</li>
          <li onClick={this.handleAllUsersClick}>All Users</li>
          <li onClick={this.handleHistoryClick}>Challenge History</li>
          <li onClick={this.handleLogoutClick}>Logout</li>
        </ul>
      </nav>
    );
  }
}
