import React, { Component } from "react";
import {
 
 
  Redirect,

} from "react-router-dom";



// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.state.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.state.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
     
    };
  }
  // state = {
  //   redirectToReferrer: false
  // };


  login = () => {
    this.props.authenticate()
    this.setState(() => ({
        redirectToReferrer: true
    }));

    // fakeAuth.authenticate(() => {
    //   this.setState(() => ({
    //     redirectToReferrer: true
    //   }));
    // });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = (this.props.location) ? this.props.location.pathname : { from: { pathname: "/" } };

    if (redirectToReferrer === true) {
      return (
        <Redirect to={from} /> //where to go
      );
    }

    return (
      <div className="sizee">
        {/* <button onClick={this.login}>Log IN</button> */}

        <div className="card justify-content-center border-secondary text-center">
          <div className="card-header">
            {/* <p>You must log in to view this page at {from.pathname}</p> */}
            <h2>
              <strong>LogIn</strong>
            </h2>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <br />
            </form>
            <button
              onClick={this.login}
              className="btn btn-secondary btn-lg btn-block"
            >
              LOGIN
            </button>
          </div>
        </div>
        
      </div>
      
    );
    
  }
   
}


export default Log;
