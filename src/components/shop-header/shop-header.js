import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./shop-header.css";
const ShopHeader = ({ oderedItem, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"></i>
          {oderedItem} items($ {total})
        </div>
      </Link>
    </header>
  );
};
const mapStateToProps = ({ shoppingCart: { oderedItem, orderTotal } }) => {
  return {
    oderedItem: oderedItem,
    total: orderTotal,
  };
};
export default connect(mapStateToProps)(ShopHeader);
