import React, { Component } from "react";
import axios from "axios";

const id = Number(localStorage.getItem("id"));

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requested: false
    };
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  async handleAddClick(clickedUserId) {
    const { data } = await axios.post(
      `http://localhost:3396/api/friends/addFriend`,
      {
        user_id: id,
        friend_id: clickedUserId
      }
    );
    this.setState({ requested: true });
  }

  render() {
    return (
      <li>
        {this.props.user.username} (email: {this.props.user.email}) (Clout:{" "}
        {this.props.user.clout})
        {!this.props.currentFriendsIds.includes(this.props.user.id) &&
          this.props.user.id !== id && (
            <input
              type="button"
              value="Add as friend"
              onClick={() => this.handleAddClick(this.props.user.id)}
              disabled={this.state.requested}
            />
          )}
      </li>
    );
  }
}

export default User;
