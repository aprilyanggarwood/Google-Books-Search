import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Books from "./pages/Home";
import Saved from "./pages/Save";
import NavMenu from "./components/Nav/Navbar";

import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="application">
        <NavMenu />
        <main className="main">
          <Container>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Books} />
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
