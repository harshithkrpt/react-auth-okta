import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Staff from "./components/Pages/Staff";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/staff" exact={true} component={Staff} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
