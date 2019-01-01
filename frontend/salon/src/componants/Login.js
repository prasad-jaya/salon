import React, { Component } from "react";
import "./Login.css";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { link } from "fs";

class LogInn extends Component {
  state = {
    redirectToReferrer: false,
    User_ID:{}
  };

  updateState(value) {
    this.setState({
      User_ID: value
    });
   
  }
  getKey(e){
    e.preventDefault();
    
    const emaill = this.refs.email.value
    const passwordd = this.refs.password.value
    
    console.log("Email " + emaill )
    console.log("Email " + passwordd )
    
       
       
        //const update = this.props;

        axios.post('http://localhost:3005/user_login', {
        email:emaill,
        password:passwordd,
        
        })
        .then(function (response) {
            console.log(response);
            localStorage.setItem('isAuthenticated', true);
            this.updateState(response.data[0].UserID);
           
            if(response.data[0].Role==="Stylist"){
              console.log("Its Stylist Login ",response.data[0].Role);
              this.props.history.push({pathname:'/stylistHome',data:response.data[0].UserID})
            }

            if(response.data[0].Role==="Salon"){
              console.log("Its Salon Login ",response.data[0].Role);
              this.props.history.push({pathname:'/search',data:response.data[0].UserID})
            }

            
           
            

        }.bind(this))

        .catch(function (error) {
          localStorage.setItem('isAuthenticated', false);
            console.log("The error is "+error);

            var element = document.getElementById("alertt");
          element.classList.remove("dis");
        });

       
       
    }

   


  render() {
   
    const dataa = this.state.User_ID;
    console.log("User_ID " , dataa)

    localStorage.setItem('UserID',dataa)

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
         <div id="alertt" class="alert alert-danger dis" role="alert" >
          This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
          <div className="card-header">
            <p>You must log in to view this page </p>
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
                  ref="email"
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
                  ref="password"
                />
              </div>
             
              <br />
            </form>
            <button
              onClick={this.login}
              className="btn btn-secondary btn-lg btn-block"
              onClick={this.getKey.bind(this)}
              
            >
              LOGIN
            </button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default LogInn;
