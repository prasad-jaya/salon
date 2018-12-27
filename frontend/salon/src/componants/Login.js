import React, { Component } from "react";
import "./Login.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

//CONTENT ON PAGE
const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class log extends Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: "/login" }
    };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="sizee">
        {/* <button onClick={this.login}>Log IN</button> */}

        <div class="card justify-content-center border-secondary text-center">
          <div class="card-header">
            <p>You must log in to view this page at {from.pathname}</p>
            <h2>
              <strong>LogIn</strong>
            </h2>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <br />
            </form>
            <button
              onClick={this.login}
              class="btn btn-secondary btn-lg btn-block"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/log",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated === true ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Signout
      </button>
    </p>
  ) : (
    <p>You are not Logged in</p>
  )
);

class LogIn extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <div>
            <AuthButton />
            <ul>
              <li>
                <Link to="/public"> public page</Link>
              </li>
              <li>
                <Link to="/protected"> protected page</Link>
              </li>
            </ul>

            <Route path="/public" component={Public} />
            <Route path="/log" component={log} />
            <PrivateRoute path="/protected" component={Protected} />
          </div>
        </Router>
      </div>
    );
  }
}

export default LogIn;
