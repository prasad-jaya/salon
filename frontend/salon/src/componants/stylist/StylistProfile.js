import React, { Component } from 'react';
import './StylistProfile.css';

import StarRatings from 'react-star-ratings';

import axios from 'axios';
import moment from 'moment';



class Profile extends Component {

 
    constructor(props) {
        super(props);
        this.state = {
          SelectDate: [],
          SelectTime: [],
            rating: {},
            UserId: 15,
            results: {},
            
         
        };
      }
         updateState(value) {
        this.setState({
          results: value
          
        });
       
      }
     

      componentWillMount(){
        const UserID = localStorage.getItem('UserID')
          console.log("results come from localstorage", UserID); 
        const ID = this.state.UserId;
        axios.post('http://localhost:3005/stylist_load_profile', {
        word:UserID,
          
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

      
      getKey(e){
        e.preventDefault();
        
        const status = 'PENDING';
        const Selectdate = this.state.SelectDate
        const SlectTime = this.state.SelectTime;
        const newtype = this.state.getword;
        const Stylist_ID = this.state.UserId;
        
        const Dates = moment();

      
            axios.post('http://localhost:3005/make_book', {
            Status:status,
            styID:Stylist_ID,
            sTime:SlectTime,
            sDate:Selectdate,
            Date:Dates

            
            })
            .then(function (response) {
                console.log(response);

                // this.updateState(response.data)

            }.bind(this))

            .catch(function (error) {
                console.log("The error is "+error);
            });

         
           
        }





      getdate(date,time){
        console.log(date,time)
        this.setState({SelectDate:date})
        this.setState({SelectTime:time})
      
      }
     




    render() {
        
      const user = localStorage.getItem( 'user');
      if (this.state.results.rows !== undefined)  
      var stylists = this.state.results.rows.map(name => {
        
        console.log("Date date iss" ,this.state.SelectDate)
        console.log("Timead date iss" ,this.state.SelectTime)
        return ( 
            <div className ="card  cardsizel">

            <div class="card-body">
<div key={205} className="cont" ref="inputword"> 

    <div className="container">
        <div className="row">
            {/* <!-- User profile --> */}
            <div className="col-xs-12 col-sm-9">
                <div className="profile__avatar">
                    <img src={require('../../img/Layer4.png')} alt="PROFILE PIC"></img>
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





