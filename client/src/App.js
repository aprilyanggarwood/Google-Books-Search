import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
// import { Container } from "../components/Grid/Grid";

import Home from "../src/pages/Home";
import Saved from "../src/pages/Saved";
import Navbar from "../src/components/Nav/Navbar";

import "./App.css";
const App = () => {
  return (
    <Router>
    <Navbar />
      <div className="application">
        
        <main className="main">
          <Container>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/saved" component={Saved} />
              </Switch>
            </div>
          </Container>
        </main>
      </div>
    </Router>
  );
};

export default App;
