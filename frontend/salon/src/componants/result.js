import React, { Component } from "react";
import "./result.css";
import { NavLink, Link } from "react-router-dom";



class Result extends Component {
  state = {};
  render() {
    console.log("results come from backend", this.props.resultsty.rows);
    
    
    
    
    
    if (this.props.resultsty.rows !== undefined)
      var stylists = this.props.resultsty.rows.map(name => {
        return (
        //   <div className="col-lg-3">
        //     <div className="our-team-main">
        //       <div className="team-front">
        //         <img src={require('../img/Layer4.png')}/>
        //         <h3>{name.FirstName}</h3>
        //         <p>{name.Email}</p>
        //       </div>

              
        //       <div className="team-back">
        //         <span>
        //           Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        //           Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
        //           natoque penatibus et magnis dis parturient montes, Lorem ipsum
        //           dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        //           ligula eget dolor. Aenean massa. Cum sociis natoque.
        //         </span>
        //       </div>
        //     </div>
        //   </div>
       
     <div key={name.UserID} className="row">
     <a href="/Profile">
       <div className="card">
       {/* <NavLink to="/Profile">Profile</NavLink> */}
            <div className="box">
            <div className="img">
                <img src={require('../img/Layer4.png')}></img>
            </div>
                <h2>{name.FirstName}<br></br><span>Web Graphic Designer</span></h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et.</p>
                  
        
            </div>
        </div>
        
       </a>
        </div>
       );
      
    
    
    
    });


    
    return <div className="con col align-self-center">{stylists}</div>;
    
  }
}

export default Result;
