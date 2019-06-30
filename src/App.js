import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Home from "./HomePage/Home";
import How from './HowItWorks/How'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />

          <div className="content">
            <Route exact path="/howitwork" component={How}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>

          {/* <Register/>
<Login/> */}
        </div>
      </Router>
    );
  }
}
export default App;
