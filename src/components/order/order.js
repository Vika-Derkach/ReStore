import React from "react";
import "./order.css";

const Order = () => {
  return (
    <div className="table-wrap">
      <h2 className=" display-4">Your order</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Site Reliebility Engeneering</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-warning btn-sm float-right"
              >
                <i className="fa fa-minus-circle" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
              >
                <i className="fa fa-trash-o" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Site Reliebility Engeneering</td>
            <td>2</td>
            <td>$40</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Site Reliebility Engeneering</td>
            <td>2</td>
            <td>$40</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Site Reliebility Engeneering</td>
            <td>2</td>
            <td>$40</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="buying">
        <div> total: $213 </div>
        <button className="btn btn-info">
          <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Order;
