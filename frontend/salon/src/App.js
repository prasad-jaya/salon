import React, { Component } from 'react';
import './App.css';
import Search from './componants/search';
import Result from './componants/result';
import Navbar from './componants/navbar';


class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      results:{}
    }
  }
  
  updateState(value){

    this.setState({
      results:value
    })
    console.log("ggrtg"+value)


  }
  
  render() {
    return (
      <div className="App">
        <Search callUpdate={this.updateState.bind(this)}/>
        
        
        {/* <Navbar/> */}
       {/* <Search/> */}
       
        <Result resultsty = {this.state.results}/>
        
      </div>
    );
  }
}

export default App;
