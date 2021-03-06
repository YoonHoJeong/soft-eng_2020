import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import Search from "routes/Search";
import Product from "components/Product";
import GlobalStyles from "components/GlobalStyles";
import Category from "routes/Category";

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
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/category/:category_title">
            <Category />
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;
