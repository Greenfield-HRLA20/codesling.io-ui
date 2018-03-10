import React, { Component } from 'react';
import axios from 'axios';

const id = Number(localStorage.getItem('id'));

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removed: false
    };
  }

  async handleDeleteClick(clickedFriendId) {
    const { data } = await axios.delete(
      `http://54.183.228.239:3396/api/friends/deleteFriend/${id}/${clickedFriendId}`
    );
    this.setState({ removed: true });
  }

  render() {
    return (
      <div>
        {!this.state.removed && (
          <li>
            {this.props.friend.username} {this.props.friend.email}
            <input
              type="button"
              value="Remove friend"
              onClick={() => this.handleDeleteClick(this.props.friend.id)}
              disabled={this.state.requested}
            />
          </li>
        )}
      </div>
    );
  }
}

export default Friend;
