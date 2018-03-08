import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar.jsx";
import User from "./User.jsx";

class AllUsers extends Component {
  state = {
    allUsers: [],
    currentFriendsIds: []
  };

  async componentDidMount() {
    const id = localStorage.getItem("id");
    let allUsers = await axios.get(
      `http://localhost:3396/api/users/fetchAllUsers/`
    );
    this.setState({ allUsers: allUsers.data.rows });

    let allFriends = await axios.get(
      `http://localhost:3396/api/friends/fetchAllFriends/${id}`
    );
    let currentFriendsIds = [];
    allFriends.data.forEach(friend => {
      currentFriendsIds.push(friend.id);
    });
    this.setState({ currentFriendsIds: currentFriendsIds });

    console.log(this.state.allUsers);
    console.log(this.state.currentFriendsIds);
  }
  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <h1>All users page!</h1>

        {this.state.allUsers && (
          <ul>
            {this.state.allUsers.map((user, i) => {
              return (
                <User
                  user={user}
                  currentFriendsIds={this.state.currentFriendsIds}
                  key={i}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default AllUsers;
