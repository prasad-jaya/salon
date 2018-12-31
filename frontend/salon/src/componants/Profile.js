import React, { Component } from 'react';
import './Profile.css';

import StarRatings from 'react-star-ratings';
import  Calender from './calender'
import axios from 'axios';
import moment from 'moment';



class Profile extends Component {

 
    constructor(props) {
        super(props);
        this.state = {
          SelectDate: [],
          SelectTime: [],
            rating: {},
            UserId: this.props.match.params.UserID,
            results: {},
            
         
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

      
   

        getinput = (event) => {

         
          localStorage.setItem('Description',event.target.value)
         
      }
      


      getdate(date,time){
        console.log(date,time)
        this.setState({SelectDate:date})
        this.setState({SelectTime:time})
      
      }
     
      sendrate(){
        this.props.getrate(this.state.Datacollection,this.state.TimeSlot);
    }



    render() {
      const user = localStorage.getItem( 'user');
      
      if (this.state.results.rows !== undefined)  
      var stylists = this.state.results.rows.map(name => {
        localStorage.setItem('Rate',name.Hr_Rate)
        localStorage.setItem('StylistID',this.state.UserId)

        console.log("Date date iss" ,this.state.SelectDate)
        console.log("Timead date iss" ,this.state.SelectTime)
        return ( 
          

          <div class="card-body">
<div key={205} className="cont" ref="inputword"> 

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

              <h5>Sarah Teare </h5>
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
<h4>Job description </h4>
<br/>
<div class="input-group">
  
  <textarea class="form-control" aria-label="With textarea" onChange = {this.getinput} ref="inputword"></textarea>
</div>
</div>


       <div className="workalin">
       <h4>Please Select Your Session To Book Stylist </h4>
         <Calender getdate={this.getdate.bind(this)}/>
       </div>

        
        
        
        

       
        
            

      </div>
     
</div>
           
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Book Your Stylist</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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





