import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_QUANTITY } from "../../../ducks/product";
import {
  FETCH_CART_START,
  FETCH_CART_END,
  CART_UPDATED
} from "../../../ducks/cart";

require("./ProductBuy.scss");

const ProductBuy = props => {
  var updateQuantity = quantity => {
    props.dispatch(dispatch => {
      dispatch({ type: UPDATE_QUANTITY, payload: quantity });
    });
  };
  return (
    <div className="border single-product-buy">
        <div className="border-line-v-1" />
        <div className="border-line-v-2" />
        <div className="border-line-h-1" />
        <div className="border-line-h-2" />
      <div className="border-top" />
      <div className="border-bottom" />
      <div className="border-content">
      <div className="border-copy">
        <form>
          <div className="single-product-buy-type"> 
            <label htmlFor="type">rodzaj zmielenia:</label>
            <select id="type">
              <option value="cale">całe ziarna</option>
              <option value="zmielone">zmielone ziarna</option>
            </select>
          </div>
          <div className="single-product-buy-quantity">
            <div className="quantity-input">
              <label>Waga:</label>
              <div className="quantity-input-buttons">
              <button
                disabled={props.product.quantity === 1 ? true : false}
                type="button"
                className="decrement number-button"
                onClick={() => {
                  updateQuantity(props.product.quantity - 1);
                }}
              >
                <span aria-hidden="true">-</span>
              </button>
              <input
                className="quantity"
                name="text"
                type="text"
                min="1"
                max="10"
                value={250 * props.product.quantity + 'g'}
                size="2"
                onChange={event => {
                  updateQuantity(event.target.value);
                }}
              />
              <button
                type="button"
                className="increment number-button"
                onClick={() => {
                  updateQuantity(props.product.quantity + 1);
                }}
              >
                <span aria-hidden="true">+</span>
              </button>
              </div>

            </div>
          </div>
        </form>
        <div className="single-product-buy-price">
          <label>cena:</label>
          <span> {props.product.selected_item.price[0].amount / 100 * props.product.quantity }zł</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductBuy;
