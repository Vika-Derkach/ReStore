import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CartPage, HomePage } from "../pages";
import ShopHeader from "../shop-header";

export default class App extends Component {
  render() {
    return (
      // <ErrorBoundry>
      <main role="main" className="container">
        <ShopHeader />

        {/* <Router> */}
        {/* {   <Header />} */}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />

          <Route render={() => <h2>Page is not found</h2>} />
        </Switch>
        {/* 
        <Goods />

        <Order />

        <Spinner />
        <ErrorIndicator /> */}
        {/* </Router> */}
      </main>
      // {/* </ErrorBoundry> */}
    );
  }
}
