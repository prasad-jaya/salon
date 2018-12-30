import React, { Component } from 'react';
import axios from 'axios';
import Checkbooking from './checkbooking';
import './StylistHome.css';
import Profile from './StylistProfile';
import Calender from './Stylistcalender';
import Updateprofiel from './Updateprofile';
import MyJobs from './MyJobs';

class stylistHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
            results: {}
            
         
        };
      }
    
   


    state = {  }
    render() { 
        return ( 



    <div key={22}>
    <div className="navs">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profileUpdate-tab" data-toggle="tab" href="#profileupdate" role="tab" aria-controls="profileupdate" aria-selected="false">Update Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Calender </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="myjobs-tab" data-toggle="tab" href="#myjobs" role="tab" aria-controls="myjobs" aria-selected="false">My Jobs </a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">

  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <Checkbooking></Checkbooking>
  </div>

  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <Profile></Profile>
  </div>

  <div class="tab-pane fade" id="profileupdate" role="tabpanel" aria-labelledby="profileUpdate-tab">
       <Updateprofiel></Updateprofiel>
  </div>

  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <Calender></Calender>
  </div>

  <div class="tab-pane fade" id="myjobs" role="tabpanel" aria-labelledby="myjobs-tab">
  <MyJobs></MyJobs>
  </div>
 
</div>


</div>
</div>


         );
    }
}
 
export default stylistHome;