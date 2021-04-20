import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorIndicator from "../error-indicator";
import Goods from "../goods";
import Order from "../order";
import { CartPage, HomePage } from "../pages";
import ShopHeader from "../shop-header";
import Spinner from "../spinner";

export default class App extends Component {
  render() {
    return (
      // <ErrorBoundry>
      <main role="main" className="container">
        <ShopHeader numItems={5} total={250} />

        {/* <Router> */}
        {/* {   <Header />} */}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />

          <Route render={() => <h2>Page is not found</h2>} />
        </Switch>

        <Goods />

        <Order />

        <Spinner />
        <ErrorIndicator />
        {/* </Router> */}
      </main>
      // {/* </ErrorBoundry> */}
    );
  }
}
