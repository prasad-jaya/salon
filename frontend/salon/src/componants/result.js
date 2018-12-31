import React, { Component } from "react";
import "./result.css";
import { Link } from "react-router-dom";




class Result extends Component {



  state = {};


  componentWillMount(){
  
  }


  render() {
   
   
    
    
    
    
    if (this.props.resultsty.rows !== undefined)
      var stylists = this.props.resultsty.rows.map(name => {
        return (
     
        <div key={name.StylistID} className="con">
        
    <Link  key={name.StylistID} to={{ pathname: "/Profile/"+name.StylistID, data: name.StylistID }}>
    {/* <Layout resultsty={name.UserID }></Layout> */}
	   
     
       <div className="card">
       
       
            <div className="box">
            <div className="img">
                <img src={require('../img/Layer4.png')} alt="Stylist Profile Pic"></img>
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