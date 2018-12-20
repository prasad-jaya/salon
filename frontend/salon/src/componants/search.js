import React, { Component } from 'react';
import axios from 'axios';
import "./search.css";


class Search extends Component {
    
   

    getKey(e){
        e.preventDefault();
        
        const keyTyped = this.refs.inputword.value
        if(keyTyped!==''){
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
            
    //     <div className="App">
    //    <input type="text" placeholder="Search here" ref="inputword"></input>
    //    <button onClick={this.getKey.bind(this)}>Search</button>
       


   <div className="cont">
	<div className="col align-self-center">
        
    		<h2>Custom search field</h2>
            <div id="custom-search-input">
                <div className="input-group col-md">
                    <input type="text" className="form-control input-lg" placeholder="Search here.." ref="inputword" />
                   
                    <button className="btn btn-outline-light "  onClick={this.getKey.bind(this)} type="submit">Search</button>
                           
                    
                </div>
            </div>
        
	
            </div>

</div>
           
        );
        
    }
}

export default Search;