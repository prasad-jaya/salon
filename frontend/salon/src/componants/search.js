import React, { Component } from 'react';
import axios from 'axios';
import "./search.css";
import Result from './result';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          results: {},
          getword:''
    
         
        };
      }
      updateState(value) {
        this.setState({
          results: value
        });
       
      }
   
getinput = (event) => {

    this.setState({
        getword:event.target.value
    })

    this.newget();
}


newget(){
    const newtype = this.state.getword
    axios.post('http://localhost:3005/get', {
        word:newtype,
        
        })
        .then(function (response) {
            console.log(response);

            this.updateState(response.data)

        }.bind(this))

        .catch(function (error) {
            console.log("The error is "+error);
        });

}



getKey(e){
        e.preventDefault();
        
        const keyTyped = this.refs.inputword.value
        const newtype = this.state.getword
        console.log("Hellooo Im here" + newtype)
        if(keyTyped!==''){
            console.log(keyTyped)

            console.log(this.props.callUpdate)

            //const update = this.props;

            axios.post('http://localhost:3005/get', {
            word:newtype,
            
            })
            .then(function (response) {
                console.log(response);

                this.updateState(response.data)

            }.bind(this))

            .catch(function (error) {
                console.log("The error is "+error);
            });

            }  
           
        }

    

    render() { 

        
     
        return ( 
            
    //     <div className="App">
    //    <input type="text" placeholder="Search here" ref="inputword"></input>
    //    <button onClick={this.getKey.bind(this)}>Search</button>
       

    
   <div>
      
   <div className="cont">
	<div className="col align-self-center">
       
    		<h2>Custom search field</h2>
            <div id="custom-search-input">
                <div className="input-group col-md">
                    <input type="text" className="form-control input-lg" placeholder="Search here.." onChange = {this.getinput} ref="inputword" />
                   
                    <button className="btn btn-outline-light "  onClick={this.getKey.bind(this)} type="submit">Search</button>
                        
                    
                </div>
                <div>{this.state.getword}</div>
            </div>
        
	
            </div>

</div>
<Result resultsty={this.state.results}/>
</div> 
    
        );
        
    }
}

export default Search;