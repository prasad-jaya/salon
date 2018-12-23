import React, { Component } from 'react';
import './Profile.css';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import StarRatings from 'react-star-ratings';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: {}
         
        };
      }
    render() { 

        

        return ( 

<div className="cont"> 
    <div class="container">
        <div class="row">
            {/* <!-- User profile --> */}
            <div class="col-xs-12 col-sm-9">
                <div class="profile__avatar">
                    <img src={require('../img/Layer3.png')}></img>
                </div>
       
                <div class="panel panel-default">
          
            
                <div class="panel-body">
           
                    <div class=" profile__header">
                        <h4>Richard Roe <small>Administrator</small></h4>
                        <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
                        </p>
                        <h6><strong>Hourly Rate : $20</strong></h6>

                    <div>
                   
                        <StarRatings 
                        name="rate2" 
                        isSelectable={false}
                        rating={3}
                        starSpacing={'3px'}
                        starRatedColor={'rgb(255,165,0)'}
                        starEmptyColor={'rgb(203, 211, 227)'}
                        starDimension={'25px'}
                        />
                    
                </div>

                        <p>
                            <a href="#"></a>
                        </p>
        </div>
    </div>
                
</div>
{/* SKILLS */}

<div className="workalin panel-body" >
        <h4><bold>Skills </bold></h4>
        <br/>
            
            <div class="feedback panel-body">
            <table class="table profile__table ">
      
        
             
             
              
                <span class="badge badge-pill badge-secondary">Secondary</span>
                <span class="badge badge-pill badge-secondary">Success</span>
                <span class="badge badge-pill badge-secondary">Danger</span>
                <span class="badge badge-pill badge-secondary">Warning</span>
                </table>
      
         </div>
</div>
        {/* <!-- User info --> */}
      
        <div className="workalin panel-body" >
        <h4><bold>Work history and feedback </bold></h4>
        <br/>
        
          <div class="feedback panel-body">
            <table class="table profile__table ">
            <h5>Richard Roe </h5>
              <p class="text-muted blockquote-footer">
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

              <hr class="style14"></hr>
            </table>
          </div>
        
        </div>
       
       

        
        
        
        <div className="workalin panel-body row" >
        <div class="col-8">
        <h4><bold>Required Hours </bold></h4></div>
        <div class="col-4"><h4><bold>10Hr</bold></h4></div>
    
        <br/>

        <div class="col-8">
        <h5>Stylist Hourly Rate </h5></div>
        <div class="col-4"><h5>$20 Hr</h5></div>

        <br/>

        <div class="col-8">
        <h5>Service Charge </h5></div>
        <div class="col-4"><h5>20%</h5></div>
        
        <br/>

        <hr class="style14"></hr>
        <div class="col-8">
        <h4><bold>Total Amount </bold></h4></div>
        <div class="col-4"><h4><bold>$220</bold></h4></div>




        </div>
        
            

      </div>
      <div class="col-xs-12 col-sm-3">
        
        {/* <!-- Contact user --> */}
        <p>
          <a href="#" class="profile__contact-btn btn btn-lg btn-block btn-info" data-toggle="modal" data-target="#profile__contact-form">
            Book Now!
          </a>
        </p>

        <hr class="profile__contact-hr"></hr>
        
        {/* <!-- Contact info --> */}
        <div class="profile__contact-info">
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
              <i class="fa fa-phone"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Work number</h5>
              (000)987-65-43
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
              <i class="fa fa-phone"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Mobile number</h5>
              (000)987-65-43
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
              <i class="fa fa-envelope-square"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">E-mail address</h5>
              <a href="mailto:admin@domain.com">admin@domain.com</a>
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
              <i class="fa fa-map-marker"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Work address</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>

      
     
    </div>
</div>
           
            </div>
            </div>
         );
    }
}
 
export default Profile;





