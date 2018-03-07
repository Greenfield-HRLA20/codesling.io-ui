<<<<<<< HEAD
import React, { Component } from "react";
import randomstring from "randomstring";
import axios from "axios";

import Button from "../globals/Button";
import Logo from "../globals/Logo";
import NavBar from "../NavBar.jsx";
=======
import React, { Component } from 'react';
import randomstring from 'randomstring';
import axios from 'axios';
import Button from '../globals/Button';
import Logo from '../globals/Logo';
>>>>>>> Commit for rebase

import "./LandingPage.css";

let slingId;

class Home extends Component {
  state = {
    allChallenges: [],
    selectedChallenge: {}
  };

  async componentDidMount() {
<<<<<<< HEAD
    const id = localStorage.getItem("id");
=======
    const id = localStorage.getItem('id');
>>>>>>> Commit for rebase
    const { data } = await axios.get(
      `http://localhost:3396/api/usersChallenges/${id}`
    );
    this.setState({ allChallenges: data.rows });
  }

  randomSlingId = () => {
    slingId = `${randomstring.generate()}`;
  };

  handleDuelClick = () => {
    this.randomSlingId();
    this.props.history.push({
      pathname: `/${slingId}`,
      state: {
        challenge: this.state.selectedChallenge
      }
    });
  };

  handleAddChallengeClick = () => {
<<<<<<< HEAD
    this.props.history.push("/addChallenge");
=======
    this.props.history.push('/addChallenge');
>>>>>>> Commit for rebase
  };

  handleChallengeSelect = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ selectedChallenge: value });
  };

  render() {
    return (
      <div className="landing-page-container">
<<<<<<< HEAD
        <NavBar history={this.props.history} />
=======
>>>>>>> Commit for rebase
        <Logo className="landing-page-logo" />
        <br />
        <select onChange={e => this.handleChallengeSelect(e)}>
          {this.state.allChallenges.map(challenge => {
            return (
              <option value={JSON.stringify(challenge)}>
                {challenge.title}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <Button
          backgroundColor="red"
          color="white"
          text="Create Challenge"
          onClick={() => this.handleAddChallengeClick()}
        />
        <br />
        <Button
          backgroundColor="red"
          color="white"
          text="Duel"
          onClick={() => this.handleDuelClick()}
        />
      </div>
    );
  }
}

export default Home;
