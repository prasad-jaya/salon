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

class SignupMain extends Component {
  state = {
    redirectToReferrer: false,
    User_ID:{}
  };

  updateState(value) {
    this.setState({
      User_ID: value
    });
   
  }
  getcreateuser(e){
    e.preventDefault();
    const emaill = this.refs.email.value
    const passwordd = this.refs.password.value

    

    if (document.getElementById('customRadio1').checked) {
      var stylist = document.getElementById('customRadio1').value;
      console.log("stylist " + stylist )
    
    
      axios.post('http://localhost:3005/create_new_user', {
        email:emaill,
        password:passwordd,
        role:'Stylist'
        
        })
        .then(function (response) {
          this.props.history.push({pathname:'/signup',data:response.data})  
          console.log(response.data);
          
            
           
           
           
            

        }.bind(this))

        .catch(function (error) {
          
            console.log("The error is "+error);
        });
    
    
    }

    if (document.getElementById('customRadio2').checked) {
      var owner = document.getElementById('customRadio2').value;
      console.log("owner " + owner )

      axios.post('http://localhost:3005/create_new_user', {
        email:emaill,
        password:passwordd,
        role:'Salon'
        
        })
        .then(function (response) {
          this.props.history.push({pathname:'/signupsalon',data:response.data})  
          console.log(response.data);
          
            
           
           
           
            

        }.bind(this))

        .catch(function (error) {
          
            console.log("The error is "+error);
        });
    
    }       
       
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
          <div className="card-header">
            
            <h2>
              <strong>Sign up</strong>
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
             
             

            
              <hr/>
              <div className="row col-md-7">
              
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                <label class="custom-control-label" for="customRadio1">I'm Stylist</label>
              </div >
              
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"></input>
                <label class="custom-control-label" for="customRadio2">I'm Salon Owner</label>
              </div>
              </div>
              <hr/>

            </form>
            <button
              onClick={this.login}
              className="btn btn-secondary btn-lg btn-block"
              onClick={this.getcreateuser.bind(this)}
              
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupMain;
