import React, { Component } from "react";
import { connect } from "react-redux";
import ProductImage from "../Products/ProductImage";
import { FETCH_CART_START, FETCH_CART_END } from "../../ducks/cart";

require("./CartPrice.scss");

var api = require("../../moltin.js");

function mapStateToProps(state) {
  return state;
}

class CartItems extends Component {
  render() {
    var items = this.props.cart.cart.data;

    var products = this.props.products.products;

    return (
      <div className="border show-cart">
        <div className="border-line-v-1" />
        <div className="border-line-v-2" />
        <div className="border-line-h-1" />
        <div className="border-line-h-2" />
        <div className="border-top" />
        <div className="border-bottom" />
        <div className="border-content">
        <span className="border-title">Całkowity Koszt</span>

          <div className="show-cart-whole">
            <p>
              <span>
                {this.props.cart.cart.meta.display_price.with_tax.amount / 100 +
                  " zł"}
              </span>
            </p>
          </div>
          <a className={items.length > 0 ? 'button button-red' : 'disable button button-red'} href="/checkout">
                Podsumowanie zakupu
          </a>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartItems);
