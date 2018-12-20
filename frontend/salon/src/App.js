import React, { Component } from "react";
import "./App.css";
import Search from "./componants/search";
import Result from "./componants/result";
import Navbar from "./componants/navbar";
import {BrowserRouter, Route , Switch} from "react-router-dom"
import Profile from "./componants/Profile"

class App extends Component {
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
    console.log("ggrtg" + value);
  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <Route path="/" component={Navbar} />
      <Switch>
      <div className="container">
        <div className="App">
         
          <Search callUpdate={this.updateState.bind(this)} />
          <Result resultsty={this.state.results} />
          <Route path="/profile" component={Profile}/>
        </div>
      </div>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
