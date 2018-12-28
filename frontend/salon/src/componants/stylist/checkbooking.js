import React, { Component } from 'react';
import axios from 'axios';
import './checkbooking.css';



class checkbooking extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        
            results: {}
            
         
        };
      }
    
    updateState(value) {
        this.setState({
          results: value
          
        });
       
      }
    
    
    componentWillMount(){
       
      const ID = this.state.UserId;
      axios.post('http://localhost:3005/pending_booking', {
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

    
    
    
    render() { 
        console.log("selected Data" ,this.state.results.rows)
        if (this.state.results.rows !== undefined) 
        var Booking = this.state.results.rows.map(name => {
            console.log("Date date iss" ,this.state.results.rows)
        
        return ( 



<div key={22}>
    <div className="nav">
            
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Booking</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
</div>

<div className="row">
<div class="col-md-9 offset-md-3">
<div class="card  cardsize" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{name.Description}</p>
    <div className ="btncls">
    <a href="#" class="btn btn-outline-primary btn-sm">CONFIRM</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#" class="btn btn-outline-danger btn-sm ">REJECT</a>
    </div>
  </div>
</div>
</div>
</div>
</div>
        );
    });
    return <div >{Booking}</div>
    }
}
 
export default checkbooking;