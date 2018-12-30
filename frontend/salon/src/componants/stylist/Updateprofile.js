import React, { Component } from 'react';
import axios from 'axios';
import './Updateprofile.css';
import { Link } from "react-router-dom";

class Updateprofiel extends Component {
  constructor(props) {
        super(props);
  this.state = { 
        results: [],
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
        const city = this.refs.city.value
        var des = this.refs.description.value
        const Rate= this.refs.rate.value
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
              FName:FirstName,
              City:city,
              Description:des,
              Skill:vals,
              rate:Rate
          
            
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
            <input type="text" class="form-control" id="inputlastname" placeholder="LastName"></input>
            </div>
        </div>



  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder={name.FirstName}></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>

  </div>

  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>

  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder={name.Location} ref="city"></input>
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
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder={name.Hr_Rate} ref="rate"></input>
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>
</div>
   


   
  </div>
  <div class="form-row">
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
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline2">I'm Stylist And Educator</label>
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