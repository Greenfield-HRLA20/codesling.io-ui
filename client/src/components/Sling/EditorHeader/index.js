import React, { Component } from "react";
import Logo from "../../globals/Logo";

// import EditorNavbar from "./EditorNavbar";
import NavBar from "../../NavBar.jsx";

import "./EditorHeader.css";

class EditorHeader extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="editor-header">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="navbar-container">
          <NavBar history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default EditorHeader;
