import React, { Component } from "react";
import "./App.css";
import Search from "./componants/search";
import Result from "./componants/result";
import Navbar from "./componants/navbar";
import {BrowserRouter, Route , Switch} from "react-router-dom"
import Profile from "./componants/Profile"
import Layout from "./Layout";

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div>
      <Route path="/" component={Navbar} />
      
      
      <Switch>
      <div className="container">
        <div className="App">
         
         <Layout/>

        </div>
      </div>
      </Switch>
      </div>

      
      </BrowserRouter>
    );
  }
}

export default App;
