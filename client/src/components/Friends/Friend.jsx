import React, { Component } from "react";
import axios from "axios";

const id = Number(localStorage.getItem("id"));

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removed: false
    };
  }

  async handleDeleteClick(clickedFriendId) {
    // console.log(clickedFriendId, id);
    console.log("clicked delete button");
    const { data } = await axios.delete(
      `http://localhost:3396/api/friends/deleteFriend/${id}/${clickedFriendId}`
    );
    // console.log("received data: ", data);
    this.setState({ removed: true });
    // this.setState({ requested: true });
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
