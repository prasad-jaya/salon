import React, { Component } from 'react';

import './salonHome.css';
import Search from '../search';
import SalonUpdate from './salonupdate';
import SalonMyJobs from './SalonMyjob';


class SalonHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
            results: {},
            StylistID:''
            
         
        };
      }
    
   


    state = {  }
    render() { 
        return ( 



    <div key={22}>
    <div className="navs">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
 
  <li class="nav-item">
    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Find Stylist </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profileUpdate-tab" data-toggle="tab" href="#profileupdate" role="tab" aria-controls="profileupdate" aria-selected="false">Update Profile</a>
  </li>
 
  <li class="nav-item">
    <a class="nav-link" id="myjobs-tab" data-toggle="tab" href="#myjobs" role="tab" aria-controls="myjobs" aria-selected="false">My Jobs </a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">

  

  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <Search></Search>
  </div>

  <div class="tab-pane fade" id="profileupdate" role="tabpanel" aria-labelledby="profileUpdate-tab">
      
  </div>

  

  <div class="tab-pane fade" id="myjobs" role="tabpanel" aria-labelledby="myjobs-tab">
  <SalonMyJobs></SalonMyJobs>
  </div>
 
</div>


</div>
</div>


         );
    }
}
 
export default SalonHome;