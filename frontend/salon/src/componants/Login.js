import React, { Component } from 'react';
import './Login.css'

class LogIn extends Component {
    state = {  }
    render() { 



        return ( 

 <div className="row sizee">
<div class="card justify-content-center border-secondary text-center">
<div class="card-header">
    <h2><strong>LogIn</strong></h2>
  </div>
  <div class="card-body">
<form>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <br/>
  <button type="submit" class="btn btn-secondary btn-lg btn-block">LOGIN</button>
</form>
</div>
</div>





   
    </div>
           




         );
    }
}
 
export default LogIn;