import React, { Component } from 'react';
import axios from 'axios';
import './Updateprofile.css';
import { Link } from "react-router-dom";

class Updateprofiel extends Component {
  constructor(props) {
        super(props);
  this.state = { 
        results: [],
        stylistrole:[],
     }

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
        const UserID = localStorage.getItem('UserID')
        const FirstName = this.refs.fname.value
        const LastName = this.refs.lname.value
        const Addresss = this.refs.address.value
        const cityt = this.refs.cityy.value
        const phoneno = this.refs.phoneno.value
        var des = this.refs.description.value
        const price = this.refs.price.value
        const StylistRole = this.state.stylistrole
        const skills = document.getElementsByName('customCheck11[]');
        var len = skills.length;
        var vals = "";
        for (var i=0; i<len; i++) {
          if (skills[i].checked) 
            {
                vals += ","+skills[i].value;
            }
        }
        if (vals) vals = vals.substring(1);



         console.log("Checked boxes" + vals)
       
        

            axios.post('http://localhost:3005/updateprofile', {
              USERID:UserID,
              create_first_name:FirstName,
              create_last_name:LastName,
              craete_address:Addresss,
              City:cityt,
              craete_phoneno:phoneno,
              Description:des,
              craete_price:price,
              create_Stylistrole:StylistRole,
              Skill:vals,
          
            
            })
            .then(function (response) {
                console.log(response);

                this.updateState(response.data)
                this.componentWillMount()
               
            }.bind(this))

            .catch(function (error) {
                console.log("The error is "+error);
            });

           this.setState({results: []})
       
         }
       
         setGender(event) {
          console.log(event.target.value);
          this.setState({stylistrole:event.target.value})
        } 

    render() { 
      

        if (this.state.results.rows !== undefined){
        console.log("resxxxxxxxxxxxxxxxxxxxxxxxxxxsxsxults",this.state.results.rows)
      var stylists = this.state.results.rows.map(name => {
        return ( 
   <div>     
<div class=" cent  container">
  <div className ="card  cardsizee">

<div class="card-body">



            <form>


            <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input type="text" class="form-control" id="inputname" placeholder={name.FirstName} ref="fname"></input>
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input type="text" class="form-control" id="inputlastname" placeholder={name.LastName} ref="lname"></input>
            </div>
        </div>




  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder={name.Address} ref="address"></input>
  </div>

  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder={name.City} ref="cityy"></input>
    </div>
    <div class="form-group col-md-6">
            <label for="inputPassword4">Phone No</label>
            <input type="text" class="form-control" id="inputlastname" placeholder={name.PhoneNo} ref="phoneno"></input>
            </div>
    </div>
    
    <div class="form-row">
    <div class="form-group col-md-6">
    <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Description</span>
  </div>
  <textarea class="form-control" aria-label="With textarea" placeholder={name.Description} ref="description"></textarea>
</div>
</div>
</div>

<div class="form-row">
    <div class="form-group col-md-6">
    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder={name.Hr_Rate} ref="price"></input>
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>
</div>
   


   
  </div>
  <div class="form-row" onChange={this.setGender.bind(this)}>
  <div class="form-group col-md-3">
  <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline1">I'm Stylist</label>
</div>
</div>
<div class="form-group col-md-3">
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline2">I'm Educator</label>
</div>
</div>
<div class="form-group col-md-3">
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline3">I'm Stylist And Educator</label>
</div>
</div>
</div>



    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Skills</label>
    <div class="custom-control custom-checkbox">
    
    <div class="form-group col-md-6">
  <input type="checkbox" class="custom-control-input" id="customCheck1" name="customCheck11[]" value="Head massage"></input>
  <label class="custom-control-label" for="customCheck1">Head massage</label>
  </div>

  <div class="form-group col-md-6">
  
  <input type="checkbox" class="custom-control-input" id="customCheck2" name="customCheck11[]" value="Shampoo"></input>
  <label class="custom-control-label" for="customCheck2">Shampoo</label>
  </div>
  <div class="form-group col-md-6">
  
  <input type="checkbox" class="custom-control-input" id="customCheck3" name="customCheck11[]" value="Shaving"></input>
  <label class="custom-control-label" for="customCheck3">Shaving</label>
  </div>
  <div class="form-group col-md-6">
  
  <input type="checkbox" class="custom-control-input" id="customCheck4" name="customCheck11[]" value="Texturizing"></input>
  <label class="custom-control-label" for="customCheck4">Texturizing</label>
  </div>
  
</div>
</div>
</div>

  <button href="/stylistHome" type="submit" class="btn btn-dark" onClick={this.getKey.bind(this)} >UPDATE
  </button>
</form>
</div>
</div>
</div>
</div>
  
         );
        })
      };
        return <div >{stylists}</div>;
    }
}
 
export default Updateprofiel;