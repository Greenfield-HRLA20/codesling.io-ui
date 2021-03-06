import React, { Component } from 'react';
import axios from 'axios';

import Input from '../../globals/forms/Input';
import Button from '../../globals/Button/';
import Logo from '../../globals/Logo';
import NavBar from '../../NavBar.jsx';

import './Auth.css';

class AddChallenge extends Component {
  state = {
    title: '',
    content: '',
    difficulty: null,
    testCase: ''
  };

  submitChallenge = async e => {
    e.preventDefault();
    const { title, content, difficulty, testCase } = this.state;
    const id = localStorage.getItem('id');
    const body = {
      title,
      content,
      difficulty,
      user_id: id,
      type: 0
    };

    const result = await axios.post(
      'http://54.183.228.239:3396/api/challenges',
      body
    );
    const testResult = await axios.post(
      'http://54.183.228.239:3396/api/testCases',
      {
        content: testCase,
        challenge_id: result.data.id
      }
    );
    this.props.history.push('/home');
  };

  handleChallengeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-form-container">
        <NavBar history={this.props.history} />
        <Logo className="landing-page-logo" />
        <form className="auth-form">
          <Input
            name="title"
            type="title"
            placeholder={'enter title'}
            onChange={this.handleChallengeInput}
          />
          <Input
            name="content"
            type="content"
            placeholder={'enter content'}
            onChange={this.handleChallengeInput}
          />
          <Input
            name="difficulty"
            type="difficulty"
            placeholder={'enter your difficulty'}
            onChange={this.handleChallengeInput}
          />
          <Input
            name="testCase"
            type="testCase"
            placeholder={'enter your testCases'}
            onChange={this.handleChallengeInput}
          />
          <Button
            backgroundColor="red"
            color="white"
            text="Add Challenge"
            onClick={e => this.submitChallenge(e)}
          />
        </form>
      </div>
    );
  }
}

export default AddChallenge;
