import React, { Component } from 'react';
import axios from 'axios';
import './MyJobs.css'

class MyJobs extends Component {
    constructor(props) {

        super(props);
       
        this.state = {
        
            results: {}
            
         
        };
        this.componentWillMount();
      }

    updateState(value) {
        this.setState({
          results: value
          
        });
       
      }


    componentWillMount(){
        const UserID = localStorage.getItem('UserID')
        const ID = this.state.UserId;
        axios.post('http://localhost:3005/my_booking', {
        USERID:UserID,
          
          })
        .then(function (response) {
              
              console.log("Booking deatils ",response.data);
              
              this.updateState(response.data)
              console.log("Data In result",response.data.rows)
  
        }.bind(this))
  
        .catch(function (error) {
              console.log("The error is "+error);
          });
      }


      getDoneKey (ev)  {
      
        const UserID = localStorage.getItem('UserID')
        
        const Book_ID = ev;
      
        console.log("Book_ID iss Im hereasas" + Book_ID)
      
            axios.post('http://localhost:3005/done-project', {
            USERID:UserID,
            BOODID:Book_ID,
            
            })
            .then(function (response) {
                console.log(response);
  
               this.componentWillMount()
  
            }.bind(this))
  
            .catch(function (error) {
                console.log("The error is "+error);
            });
  
           
           
        }

      
    render() {
        if (this.state.results.rows !== undefined) 
        var Booking = this.state.results.rows.map(name => { 
        return ( 

            <div>
<div key ={name.Book_ID} className="cont" >


<div className="row" id="bookid" value={name.Book_ID}>
<div class="col-md-9 offset-md-3">
<div class="card  cardsize" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{name.Book_ID}</p>
    <div className ="btncls">
    <a href="#" class="btn btn-outline-primary btn-sm" onClick={() => {this.getDoneKey(name.Book_ID)}}>DONE </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <a href="#" class="btn btn-outline-danger btn-sm " onClick={() => {this.getCancelKey(name.Book_ID)}}>CANCEL</a> */}
    </div>
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
 
export default MyJobs;