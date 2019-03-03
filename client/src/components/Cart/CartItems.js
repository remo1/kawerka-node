import React, { Component } from "react";
import { connect } from "react-redux";
import ProductImage from "../Products/ProductImage";
import { FETCH_CART_START, FETCH_CART_END } from "../../ducks/cart";

require("./CartItems.scss");

var api = require("../../moltin.js");

function mapStateToProps(state) {
  return state;
}

class CartItems extends Component {
  render() {
    var cart_decrement = (ID, quantity) => {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .UpdateCartMinus(ID, quantity)

          .then(cart => {
            console.log("cart quantity updated");
            dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
          })

          .catch(e => {
            console.log(e);
          });
      });
    };

    var cart_increment = (ID, quantity) => {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .UpdateCartPlus(ID, quantity)

          .then(cart => {
            console.log("cart quantity updated");

            dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
          })

          .catch(e => {
            console.log(e);
          });
      });
    };

    var cart_edit = (ID, quantity) => {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .UpdateCart(ID, quantity)

          .then(cart => {
            console.log("cart quantity updated");
            dispatch({ type: FETCH_CART_END, payload: cart });
          })

          .catch(e => {
            console.log(e);
          });
      });
    };

    var items = this.props.cart.cart.data;

    var products = this.props.products.products;

    if (items.length > 0) {
      return (
        <div className="border cart">
          <div className="border-line-v-1" />
          <div className="border-line-v-2" />
          <div className="border-line-h-1" />
          <div className="border-line-h-2" />
          <div className="border-top" />
          <div className="border-bottom" />
          <div className="border-content">
          <span className="border-title">koszyk</span>
            {items.map(function(item) {
              var productArray = products.data.filter(function(product) {
                return product.id === item.product_id;
              });

              var product = productArray[0];

              var TotalPriceHidden = "hidden";

              if (item.quantity > 1) {
                TotalPriceHidden = "";
              }

              return (
                <div className="cart-item" key={item.id}>
                  <div className="product-image" aria-hidden="true">
                    <ProductImage
                      alt="item.description"
                      products={products}
                      product={product}
                    />
                  </div>
                  <div className="cart-details">
                    <div className="cart-title">
                      <h3>{item.name}</h3>
                    </div>

                    <div className="cart-quantity">
                      <div className="quantity-input">
                        <button
                          type="button"
                          className="decrement number-button"
                          onClick={() => {
                            cart_decrement(item.id, item.quantity);
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
                          size="2"
                          defaultValue={item.quantity * 250 + "g"}
                          onBlur={event => {
                            cart_edit(item.id, event.target.value);
                            console.log(event.target.value);
                          }}
                        />
                        <button
                          type="button"
                          className="increment number-button"
                          onClick={() => {
                            cart_increment(item.id, item.quantity);
                          }}
                        >
                          <span aria-hidden="true">+</span>
                        </button>
                      </div>
                    </div>
                    <div className="cart-price">
                      <p className="type">
                        Grind: <span>{product.grind === 'cale' ? 'Całe Ziarna' : 'Zmielone Ziarna' }</span>
                      </p>
                      <p className="origin">
                        Kraj pochodzenia: <span> {product.origin}</span>
                      </p>
                      <p className="price">
                        Cena:{" "}
                        <span>
                          {item.unit_price.amount / 100 * item.quantity + "zł"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="border cart">
          <div className="border-line-v-1" />
          <div className="border-line-v-2" />
          <div className="border-line-h-1" />
          <div className="border-line-h-2" />
          <div className="border-top" />
          <div className="border-bottom" />
          <div className="slider-content empty">
            Twój koszyk jest pusty
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(CartItems);
