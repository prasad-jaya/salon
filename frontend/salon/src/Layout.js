import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from "./componants/search";
import Result from "./componants/result";
import Profile from "./componants/Profile"
import Home from "./componants/Home"

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: {}
  
       
      };
    }
  
    updateState(value) {
      this.setState({
        results: value
      });
     
    }
      

   
    render() { 
        return ( 
            <div>
              <Switch>
                <Route exact strict path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Search callUpdate={this.updateState.bind(this)} />

                <div className="container"></div>

                <Result resultsty={this.state.results} />

              
                <Route exact strict path="/profile" component={Profile}/>
              </Switch>

            </div>
         );
    }
}

export default Layout;

 
