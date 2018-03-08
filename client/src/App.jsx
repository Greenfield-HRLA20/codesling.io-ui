import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage/index.jsx";
import Signup from "./components/Auth/Signup.jsx";
import Login from "./components/Auth/Login.jsx";
import Sling from "./components/Sling/index.jsx";
import Slinger from "./components/Sling/Sling.jsx";
import Home from "./components/Home/index.jsx";
import Challenge from "./components/Challenge/index.jsx";
import AddChallenge from "./components/Challenge/AddChallenge/index.jsx";
import Protected from "./components/globals/Protected";
import History from "./components/History/index.jsx";
import Friends from "./components/Friends/index.jsx";
import AllUsers from "./components/AllUsers/index.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/home"
            component={props => <Protected component={Home} {...props} />}
          />
          <Route
            path="/addChallenge"
            component={props => (
              <Protected component={AddChallenge} {...props} />
            )}
          />
          <Route
            path="/challenge"
            component={props => <Protected component={Challenge} {...props} />}
          />
          {/* <Route
            path="/slinger"
            component={props => <Protected component={Slinger} {...props} />}
          /> */}
          <Route
            path="/history"
            component={props => <Protected component={History} {...props} />}
          />
          <Route
            path="/:sling"
            component={props => <Protected component={Sling} {...props} />}
          />
          {/* <Route path="/slinger" component={Slinger} /> */}
          <Route path="/history" component={History} />
          <Route path="/friends" component={Friends} />
          <Route path="/allUsers" component={AllUsers} />
          <Route path="/:sling" component={Sling} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
