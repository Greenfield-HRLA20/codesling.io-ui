import React, { Component } from "react";
import axios from "axios";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async handleDeleteClick(clickedFriendId) {
    const id = Number(localStorage.getItem("id"));
    console.log(clickedFriendId, id);
    console.log("clicked delete button");
    const { data } = await axios.delete(
      `http://localhost:3396/api/friends/deleteFriend/${id}/${clickedFriendId}`
    );
    console.log("received data: ", data);
    // this.setState({ requested: true });
  }

  render() {
    return (
      <li>
        {this.props.friend.username} ({this.props.friend.email}})
        <input
          type="button"
          value="Remove friend"
          onClick={() => this.handleDeleteClick(this.props.friend.id)}
          disabled={this.state.requested}
        />
      </li>
    );
  }
}

export default Friend;
