import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Goods from "../goods";
import Header from "../header";
import Order from "../order";
import Spinner from "../spinner";
export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <ErrorBoundry>
          <Header />
          <ErrorBoundry>
            <Goods />
          </ErrorBoundry>
          <ErrorBoundry>
            <Order />
          </ErrorBoundry>
          <Spinner />
          <ErrorIndicator />
        </ErrorBoundry>
      </div>
    );
  }
}
