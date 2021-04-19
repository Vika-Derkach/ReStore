import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Goods from "../goods";
import Header from "../header";
import Order from "../order";
import { CartPage, HomePage } from "../pages";
import Spinner from "../spinner";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart-page" component={CartPage} />

            <Route render={() => <h2>Page is not found</h2>} />
          </Switch>
          <Goods />

          <Order />

          <Spinner />
          <ErrorIndicator />
        </Router>
      </ErrorBoundry>
    );
  }
}
