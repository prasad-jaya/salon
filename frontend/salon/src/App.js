import React, { Component } from "react";
import "./App.css";
import Navbar from "./componants/navbar";
import {BrowserRouter, Route , Switch} from "react-router-dom"
import Layout from "./Layout";
import Footer from "./componants/footer";

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div>
    
      
      
      <Switch>
      {/* <div className="container"> */}
        {/* <div className="App"> */}
         
         <Layout/>
         <Footer></Footer>
        {/* </div>
      </div> */}
      </Switch>
      </div>

      
      </BrowserRouter>
    );
  }
}

export default App;
