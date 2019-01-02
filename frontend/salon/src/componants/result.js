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
          <div className="container">
               <div className="row col-md" >
        <div key={name.StylistID} className="con">
        
    <Link  key={name.StylistID} to={{ pathname: "/Profile/"+name.StylistID, data: name.StylistID }}>
    {/* <Layout resultsty={name.UserID }></Layout> */}
	   
     
       <div className="card">
       
       
            <div className="box">
            <div className="img">
                <img src={require('../img/Layer4.png')} alt="Stylist Profile Pic"></img>
            </div>
                <h2>{name.FirstName}<br></br><span>{name.StylistRole}</span></h2>
                <p>{name.Description} </p>
                  
      
        
      
        </div>
      </div>
     

        </Link>
        </div>
        </div>
        </div>

       );
      
    
    
    
    });


    
    return <div className="con col align-self-center">{stylists}</div>;
    
  }
}

export default Result;