import React, { Component } from 'react';
import CodeMirror from 'react-codemirror2';
import io from 'socket.io-client/dist/socket.io.js';
import axios from 'axios';
import { throttle } from 'lodash';

import Stdout from './StdOut/index.jsx';
import ChatBox from '../ChatBox/ChatBox.jsx';
import EditorHeader from './EditorHeader';
import NavBar from '../NavBar.jsx';

import Button from '../globals/Button';

import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import './Sling.css';

class Sling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      ownerText: null,
      challengerText: null,
      //
      textField: '',
      msg: [],
      //
      text: '',
      challenge: '',
      stdout: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    const { socket, challenge } = this.props;
    const startChall =
      typeof challenge === 'string' ? JSON.parse(challenge) : {};
    socket.on('connect', () => {
      socket.emit('client.ready', startChall);
    });

    socket.on('server.initialState', ({ id, text, challenge }) => {
      this.setState({
        id,
        ownerText: text,
        challengerText: text,
        challenge
      });
    });

    socket.on('server.changed', ({ text, email }) => {
      if (localStorage.getItem('email') === email) {
        this.setState({ ownerText: text });
      } else {
        this.setState({ challengerText: text });
      }
    });

    socket.on('server.run', ({ stdout, email }) => {
      const ownerEmail = localStorage.getItem('email');
      stdout = stdout.trim().split('\n');
      let result = stdout.pop();
      stdout = stdout.join('\n');
      email === ownerEmail ? this.setState({ stdout }) : null;
      if (result === 'true') {
        if (email === ownerEmail) {
          alert(`Winner Winner Chicken Dinner`);
        } else {
          socket.emit('client.recordHistory', {
            challenge_id: this.state.challenge.id,
            winner: email,
            loser: ownerEmail
          });
          alert(`You lost! Better Luck Next Time`);
        }
      }
    });

    socket.on('disconnect', () => {
      this.props.history.push('/history');
    });

    //

    socket.on('server.message', payload => {
      // const ownerEmail = localStorage.getItem('email');
      let temp = Array.from(this.state.msg);
      temp.push(payload);
      this.setState({ msg: temp });
    });
    //

    window.addEventListener('resize', this.setEditorSize);
  }

  submitCode = () => {
    const { socket } = this.props;
    const { ownerText, challenge } = this.state;
    const email = localStorage.getItem('email');
    console.log(challenge);
    socket.emit('client.run', { text: ownerText, email, test: challenge.test });
  };

  //
  submitMessage = () => {
    const { socket } = this.props;
    const { textField } = this.state;
    const email = localStorage.getItem('email');
    if (textField.length) {
      socket.emit('client.message', { value: textField, email });
    }
    this.setState({ textField: '' });
  };
  //

  handleChange = throttle((editor, metadata, value) => {
    const email = localStorage.getItem('email');
    this.props.socket.emit('client.update', { text: value, email }); //value is whatever the user types into the code editor
  }, 250);

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setEditorSize = throttle(() => {
    this.editor.setSize(null, `${window.innerHeight - 80}px`);
  }, 100);

  initializeEditor = editor => {
    this.editor = editor;
    this.setEditorSize();
  };

  render() {
    const { socket } = this.props;
    return (
      <div className="sling-container">
        <EditorHeader history={this.props.history} />
        <div className="code1-editor-container">
          <CodeMirror
            editorDidMount={this.initializeEditor}
            value={this.state.ownerText}
            options={{
              mode: 'javascript',
              lineNumbers: true,
              theme: 'base16-dark'
            }}
            onChange={this.handleChange}
          />
        </div>
        <div className="stdout-container">
          {this.state.challenge.title || this.props.challenge.title}
          <br />
          {this.state.challenge.content || this.props.challenge.content}
          <br />
          <Stdout text={this.state.stdout} />
          <Button
            className="run-btn"
            text="Run Code"
            backgroundColor="red"
            color="white"
            onClick={() => this.submitCode()}
          />
          <div className="chatbox">
            <input
              name="textField"
              value={this.state.textField}
              onChange={this.changeHandler}
              className="messages"
              placeholder="Chat here"
            />
            <button
              className="submitMessage"
              onClick={() => this.submitMessage()}
            >
              Send message
            </button>

            <ChatBox msg={this.state.msg} />
          </div>
        </div>
        <div className="code2-editor-container">
          <CodeMirror
            editorDidMount={this.initializeEditor}
            value={this.state.challengerText}
            options={{
              mode: 'javascript',
              lineNumbers: true,
              theme: 'base16-dark',
              readOnly: true
            }}
          />
        </div>
      </div>
    );
  }
}

export default Sling;
