import React, { Component } from 'react';
import './Profile.css';

import StarRatings from 'react-star-ratings';
import  Calender from './calender'
import axios from 'axios';




class Profile extends Component {

 
    constructor(props) {
        super(props);
        this.state = {
            rating: {},
            UserId: this.props.match.params.UserID,
            results: {}
         
        };
      }
         updateState(value) {
        this.setState({
          results: value
          
        });
       
      }
     

      componentWillMount(){
          console.log("results come from Result", this.state.UserId); 
        const ID = this.state.UserId;
        axios.post('http://localhost:3005/get/stylist', {
        word:ID,
          
          })
        .then(function (response) {
              
              console.log("The error is ",response.data);
              
              this.updateState(response.data)
              console.log("Data In result",response.data.rows)

        }.bind(this))

        .catch(function (error) {
              console.log("The error is "+error);
          });
      }
      
      getKey(){
       
        
        
        }




    render() {
      
      
      if (this.state.results.rows !== undefined)  
      var stylists = this.state.results.rows.map(name => {
        return ( 

<div key={205} className="cont"> 

    <div className="container">
        <div className="row">
            {/* <!-- User profile --> */}
            <div className="col-xs-12 col-sm-9">
                <div className="profile__avatar">
                    <img src={require('../img/Layer3.png')} alt="PROFILE PIC"></img>
                </div>
       
                <div className="panel panel-default">
          
            
                <div className="panel-body">
           
                    <div className=" profile__header">
                        <h4>{name.FirstName} <small>{name.Role}</small></h4>
                        <p className="text-muted">
                        {name.Description}
                        </p>
                        <h6><strong>Hourly Rate : ${name.Hr_Rate}</strong></h6>

                    <div>
                   
                        <StarRatings 
                        name="rate2" 
                        isSelectable={false}
                        rating={name.Stars}
                        starSpacing={'3px'}
                        starRatedColor={'rgb(255,165,0)'}
                        starEmptyColor={'rgb(203, 211, 227)'}
                        starDimension={'25px'}
                        />
                    
                </div>

                       
        </div>
    </div>
                
</div>
{/* SKILLS */}

<div className="workalin panel-body" >
        <h4> Skills </h4>
        <br/>
            
            <div className="feedback panel-body table profile__table">
           
      
        
             
             
              
                <span className="badge badge-pill badge-secondary">{name.Skills}</span>
                <span className="badge badge-pill badge-secondary">Success</span>
                <span className="badge badge-pill badge-secondary">Danger</span>
                <span className="badge badge-pill badge-secondary">Warning</span>
              
      
         </div>
</div>
        {/* <!-- User info --> */}
      
        <div className="workalin panel-body" >
        <h4>Work history and feedback </h4>
        <br/>
        


          <div className="feedback panel-body table profile__table">
           
            <h5>Richard Roe </h5>
              <p className="text-muted blockquote-footer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
              </p>
              <div>
                   
                   <StarRatings 
                   name="rate2" 
                   isSelectable={false}
                   rating={3}
                   starSpacing={'3px'}
                   starRatedColor={'rgb(255,165,0)'}
                   starEmptyColor={'rgb(203, 211, 227)'}
                   starDimension={'20px'}
                   />
               </div>

              <hr className="style14"></hr>

              <h5>Richard Roe </h5>
              <p className="text-muted blockquote-footer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
              </p>
              <div>
                   
                   <StarRatings 
                   name="rate2" 
                   isSelectable={false}
                   rating={4}
                   starSpacing={'3px'}
                   starRatedColor={'rgb(255,165,0)'}
                   starEmptyColor={'rgb(203, 211, 227)'}
                   starDimension={'20px'}
                   />
               </div>

              <hr className="style14"></hr>
           
          </div>


 
        
        </div>
       <br/>
       <div>
       <h4>Please Select Your Session </h4>
         <Calender/>
       </div>

        
        
        
        <div className="workalin panel-body row" >
        <div className="col-8">
        <h4>Required Hours </h4></div>
        <div className="col-4"><h4>10Hr</h4></div>
    
        <br/>

        <div className="col-8">
        <h5>Stylist Hourly Rate </h5></div>
        <div className="col-4"><h5>$20 Hr</h5></div>

        <br/>

        <div className="col-8">
        <h5>Service Charge </h5></div>
        <div className="col-4"><h5>20%</h5></div>
        
        <br/>

        <hr className="style14"></hr>
        <div className="col-8">
        <h4>Total Amount </h4></div>
        <div className="col-4"><h4>$220</h4></div>

        <br/>
        <br/>


        </div>
        
            

      </div>
      <div className="col-xs-12 col-sm-3">
        
        {/* <!-- Contact user --> */}
        <p>
          <a href="./successfulPage" className="profile__contact-btn btn btn-lg btn-block btn-info" data-toggle="modal" data-target="#profile__contact-form">
            Book Now!
          </a>
        </p>

        <hr className="profile__contact-hr"></hr>
        
        {/* <!-- Contact info --> */}
        <div className="profile__contact-info">
          <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">Location</h5>
              {name.Location}
            </div>
          </div>
          <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">Mobile number</h5>
              (000)987-65-43
            </div>
          </div>
          <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-envelope-square"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">E-mail address</h5>
              <a href="mailto:admin@domain.com">admin@domain.com</a>
            </div>
          </div>
          <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">Work address</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>

       
     
    </div>
</div>
           
            </div>
            </div>
         );
        });
      
        return <div >{stylists}</div>;
    }
}
 
export default Profile;





