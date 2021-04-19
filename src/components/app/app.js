import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Goods from "../goods";
import Header from "../header";
import { HomePage, CartPage } from "../pages";
import Order from "../order";
import Spinner from "../spinner";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <Router>
          <Header />
          <Route path="/home-page" component={HomePage} />
          <Route path="/cart-page" component={CartPage} />
          <Goods />

          <Order />

          <Spinner />
          <ErrorIndicator />
        </Router>
      </ErrorBoundry>
    );
  }
}
