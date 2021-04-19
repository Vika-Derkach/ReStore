import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="header d-flex">
        <h1>ReStore</h1>
        <Link to="/cart-page">Cart Page</Link>
        <Link to="/home-page">Home Page</Link>
        <div className="header-item">
          <i className="fa fa-anchor" aria-hidden="true"></i>
          <div className="costs">item 5 (200$) </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
