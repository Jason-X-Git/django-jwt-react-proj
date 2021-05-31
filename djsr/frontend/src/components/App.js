import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Hello from './hello';


class App extends Component {
  render() {
    return (
      <div className="site">
        <nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/login/">
            Login
          </Link>
          <Link className="nav-link" to="/signup/">
            Signup
          </Link>
          <Link className="nav-link" to="/hello/">
            Hello
          </Link>
        </nav>
        <main>
          <h1>Time to to launch !</h1>
          <Switch>
            <Route exact path="/login/" component={Login} />
            <Route exact path="/signup/" component={Signup} />
            <Route exact path="/hello/" component={Hello} />
            <Route exact path="/" render={() => <div>Home Again</div>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
