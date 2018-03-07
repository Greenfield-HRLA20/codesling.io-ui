import React, { Component } from "react";
import axios from "axios";

import { HistoryList } from "./HistoryList.jsx";
import NavBar from "../NavBar.jsx";

class History extends Component {
  state = {
    history: []
  };

  async componentDidMount() {
<<<<<<< HEAD
    const id = localStorage.getItem("id");
    const { data } = await axios.get(
      `http://localhost:3396/api/history/fetchAllHistory/${id}`
    );
    console.log("received data is", data);
=======
    const id = localStorage.getItem('id');
    const { data } = await axios.get(
      `http://localhost:3396/api/history/fetchAllHistory/${id}`
    );
>>>>>>> Commit for rebase
    this.setState({ history: data });
    console.log('this is the id', id);
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <NavBar history={this.props.history} />
=======
>>>>>>> Commit for rebase
        <HistoryList history={this.state.history} />
      </div>
    );
  }
}

export default History;
