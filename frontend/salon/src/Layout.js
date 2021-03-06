import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./componants/search";
import Profile from "./componants/Profile";
import Home from "./componants/Home";
import Calender from "./componants/calender";
import LogInn from "./componants/Login";
import Navbar from "./componants/navbar";
import checkbooking from "./componants/stylist/checkbooking"
import stylistHome from "./componants/stylist/StylistHome"
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import updateprofiel from "./componants/stylist/Updateprofile";
import Footer from "./componants/footer";
import Signup from "./componants/signup"
import SignupMain from "./componants/SignupMain";
import Signupsalon from "./componants/signupsalon";
import SalonHome from "./componants/salon/salonHome";




const fakeAuth = {
  isAuthenticated: localStorage.getItem('UserID'),
 
  authenticate(cb) {

    
     this.isAuthenticated = true;
    //localStorage.setItem('isAuthenticated', true);
    
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
     this.isAuthenticated= false;
    //localStorage.setItem('isAuthenticated', false);
    
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (        
  <Route {...rest} render={(props) =>(
        fakeAuth.isAuthenticated ===true
        ? <Component {...props} />
        : <Redirect to = {{
          pathname: '/loginn',
          state: {from: props.location}
        }} />
  )}/>
)

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


class login extends Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" }
    };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="sizee">
        {/* <button onClick={this.login}>Log IN</button> */}

        <div className="card justify-content-center border-secondary text-center">
          <div className="card-header">
            <p>You must log in to view this page at {from.pathname}</p>
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






class Layout extends Component {
  constructor(props) {
    super(props);
    // this.state={isAuthenticated: isAuthenticatedd,
    //   LogStatus: isAuthenticatedd}
   

  }

  
  authenticate() {
    this.setState({isAuthenticated : true});
    // setTimeout(cb, 100); // fake async
  }

  signout() {
    this.setState({isAuthenticated : false});
    // setTimeout(cb, 100);
  }



  render() {
   
    return (
      <div>
        <Navbar />
       
         <Route path="/" component={Navbar} /> />
        <AuthButton/>
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/signup" component={Signup} />
          <Route exact strict path="/signupfirst" component={SignupMain} />
          <Route exact strict path="/signupsalon" component={Signupsalon} />
          <Route exact strict path="/salonhome" component={SalonHome} />
          <Route exact strict path="/search" component={Search} />
          <Route exact strict path="/stylistHome/checkbookings" component={checkbooking} />
          <Route exact strict path="/stylistHome" component={stylistHome} />
           <Route exact strict path="/updateprofile" component={updateprofiel} />
          {/* <Route exact strict path="/Profile/:UserID"  component={Profile}/> */}
          <Route path="/login" component={login} />
          {/* <Route path="/log" render={()=>{return <Log authenticate={this.authenticate.bind(this)}/>}}/> */}
          <Calender exact strict path="/calender" component={Calender} />
          <Route exact strict path="/loginn" component={LogInn} />
          
          <Route exact strict path="/Profile/:UserID" component={Profile} />
          <div className="container" />
         
        </Switch>
        {/* <Footer></Footer> */}
       
      </div>
    );
  }
}

export default Layout;
