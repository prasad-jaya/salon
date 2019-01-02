import React, { Component } from 'react';
import axios from 'axios';
import './salonupdate.css';
import { Link } from "react-router-dom";

class SalonUpdate extends Component {
  constructor(props) {
        super(props);
  this.state = { 
        results: [],
        // stylistrole:[],
        // SalonID:this.props.location.data
     }

    }



  
    


    // getSalonProfileKey(e){
    //     e.preventDefault();
    //     const SalonID = this.state.SalonID
    //     const FirstName = this.refs.fname.value
    //     const LastName = this.refs.lname.value
    //     const Addresss = this.refs.address.value
    //     const cityt = this.refs.cityy.value
    //     const phoneno = this.refs.phoneno.value
      

        

    //         axios.post('http://localhost:3005/create_new_stylist_profile', {
              
    //           salonid:SalonID,
    //           create_first_name:FirstName,
    //           create_last_name:LastName,
    //           craete_address:Addresss,
    //           City:cityt,
    //           craete_phoneno:phoneno,
             
              
             
            
    //         })
    //         .then(function (response) {
    //             console.log(response);

    //             this.updateState(response.data)
    //             this.componentWillMount()
               
    //         }.bind(this))

    //         .catch(function (error) {
    //             console.log("The error is "+error);
    //         });

    //        this.setState({results: []})
       
    //      }


    //      setGender(event) {
    //       console.log(event.target.value);
    //       this.setState({stylistrole:event.target.value})
    //     } 


    render() { 
      
console.log("StylistIDDDD",this.state.StylistID)
       
        return ( 
   <div>     
<div class=" container">
  <div className ="card  cardsizeel">

<div class="card-body">



            <form>


            <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">First Name Of Salon Owner</label>
            <input type="text" class="form-control" id="inputname" placeholder="First Name" ref="fname"></input>
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name Of Salon Owner</label>
            <input type="text" class="form-control" id="inputlastname" placeholder="Last Name" ref="lname"></input>
            </div>
        </div>



 
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" ref="address"></input>
  </div>

  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="Location" ref="cityy"></input>
    </div>
    <div class="form-group col-md-6">
            <label for="inputPassword4">Phone No</label>
            <input type="text" class="form-control" id="inputlastname" placeholder="Phone No" ref="phoneno"></input>
            </div>
    </div>
    
   

  <button href="/stylistHome" type="submit" class="btn btn-dark" onClick={this.getSalonProfileKey.bind(this)} >CREATE PROFILE
  </button>
</form>
</div>
</div>
</div>
</div>
  
         );
    
    }
}
 
export default SalonUpdate;