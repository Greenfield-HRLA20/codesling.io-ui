import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar.jsx";
import Friend from "./Friend.jsx";

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: []
    };
  }

  async componentDidMount() {
    const id = localStorage.getItem("id");
    const { data } = await axios.get(
      `http://localhost:3396/api/friends/fetchAllFriends/${id}`
    );
    this.setState({ friendsList: data });
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />

        <h1>Your friends page!</h1>
        <ul>
          {this.state.friendsList.map((friend, i) => {
            return <Friend friend={friend} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}
