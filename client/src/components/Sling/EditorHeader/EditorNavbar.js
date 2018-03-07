import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../../../components/Home/index.jsx';

const EditorNavbar = () => (
  <nav className="editor-navbar">
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <li>Friends</li>
      <li>Messages</li>
      <li>History</li>
    </ul>
  </nav>
);

export default EditorNavbar;
