import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Category from "routes/Category";
import Home from "routes/Home";
import Search from "routes/Search";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/Category">
            <Category />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
