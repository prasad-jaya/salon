import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from "./componants/search";
import Profile from "./componants/Profile"
import Home from "./componants/Home"
import Calender from "./componants/calender"
import LogIn from './componants/Login';

class Layout extends Component {
   
      

   
    render() { 
     
        return ( 
            <div>
              <Switch>
                <Route exact strict path="/" component={Home}/>
                <Route exact strict path="/search" component={Search}/>
                <Route exact strict path="/Profile/:UserID"  component={Profile}/>
                <Calender exact strict path="/calender" component={Calender}/>
                <Route exact strict path="/login" component={LogIn}/>
                <div className="container"></div>
                


                
              </Switch>

            </div>
         );
    }
}

export default Layout;

 
