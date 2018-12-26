import React, { Component } from "react";
import "./result.css";
import { Link } from "react-router-dom";
import Layout from '../Layout'
import  Profile from './Profile';


var ID;
class Result extends Component {

  SendData = (e,userID) => {
    ID = userID;
    
  }


  state = {};
  render() {
    console.log("results come from backend", this.props.resultsty.rows);
    
    
    
    
    
    if (this.props.resultsty.rows !== undefined)
      var stylists = this.props.resultsty.rows.map(name => {
        return (
     
        <div key={name.UserID} className="con">
        
    <Link  key={name.UserID} to={{ pathname: "/Profile/"+name.UserID, data: name.UserID }}>
    {/* <Layout resultsty={name.UserID }></Layout> */}
	   
     
       <div onClick={(e) =>{this.SendData(e,name.UserID)}} className="card">
       
       
            <div className="box">
            <div className="img">
                <img src={require('../img/Layer4.png')}></img>
            </div>
                <h2>{name.FirstName}<br></br><span>Web Graphic Designer</span></h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et.</p>
                  
      
        
      
        </div>
      </div>
     

        </Link>
        </div>
       );
      
    
    
    
    });


    
    return <div className="con col align-self-center">{stylists}</div>;
    
  }
}

export default Result;
