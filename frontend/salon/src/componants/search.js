import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


class Search extends Component {
    
   

    getKey(e){
        e.preventDefault();
        
        const keyTyped = this.refs.inputword.value
        if(keyTyped!=''){
            console.log(keyTyped)

            console.log(this.props.callUpdate)

            const update = this.props;

            axios.post('http://localhost:3005/get', {
            word:keyTyped,
            
            })
            .then(function (response) {
                console.log(response);

                update.callUpdate(response.data)


            })
            .catch(function (error) {
                console.log(error);
            });

            }  
           
        }

    

    render() { 

       
     
        return ( 
            
        <div className="App">
       <input type="text" placeholder="Search here" ref="inputword"></input>
       <button onClick={this.getKey.bind(this)}>Search</button>
       

       


      </div>
   



           
        );
    }
}

export default Search;