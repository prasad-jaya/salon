import React, { Component } from 'react';
import axios from 'axios';
import './SalonMyjob.css'
import StarRatings from 'react-star-ratings';

class SalonMyJobs extends Component {
    constructor(props) {

        super(props);
       
        this.state = {
        
            results: {},
            rating: []
            
         
        };
        this.componentWillMount();
      }


      changeRating( newRating, name ) {
        // this.setState({
        //   rating: newRating
        // });
      }

    updateState(value) {
        this.setState({
          results: value
          
        });
       
      }
      pushpage(e){
        this.componentWillMount()
      }

    componentWillMount(){
        const UserID = localStorage.getItem('UserID')
        const ID = this.state.UserId;
        axios.post('http://localhost:3005/salon_my_booking', {
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
      
            axios.post('http://localhost:3005/done_and_release', {
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
    <h5 class="card-title">Finished</h5>
    <p class="card-text">{name.Book_Date}</p>
    <p class="card-text">{name.Description}</p>
    <div className ="btncls">
    <a href="#" class="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {this.getDoneKey(name.Book_ID)}}>Release the Payment </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <a href="#" class="btn btn-outline-danger btn-sm " onClick={() => {this.getCancelKey(name.Book_ID)}}>CANCEL</a> */}
    </div>
  </div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Please Share The Experience with this Stylist</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Feedback</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>

<StarRatings 
                        name="rate2" 
                        isSelectable={true}
                       changeRating={this.changeRating}
                        starSpacing={'3px'}
                        starRatedColor={'rgb(255,165,0)'}
                        starEmptyColor={'rgb(203, 211, 227)'}
                        starDimension={'25px'}
                        />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  onClick={this.pushpage.bind(this)}>Save changes</button>
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
 
export default SalonMyJobs;