import React, { Component } from "react";
import { connect } from "react-redux";
import * as api from "../../../moltin";
import {
  FETCH_CART_START,
  FETCH_CART_END,
  CART_UPDATED
} from "../../../ducks/cart";
require("./AddToCartButton.scss");

const AddToCartButton = props => {
  var addToCart = (id, e) => {
    e.persist();
    e.target.innerHTML =
      '<img width="32px" height="auto" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif">';

    let selectbox = document.querySelector(".single-product-buy-type select").value;
    let coffeeTypeArray = props.products.filter(
      item => item.origin === props.product.selected_item.origin
    );
    let coffeeType = coffeeTypeArray.find(item => item.grind === selectbox);

    props.dispatch(dispatch => {
      api
        .AddCart(coffeeType.id, props.product.quantity)

        .then(cart => {
          console.log(cart);
          dispatch({ type: CART_UPDATED, gotNew: false });
        })

        .then(() => {
          dispatch({ type: FETCH_CART_START, gotNew: false });

          api
            .GetCartItems()

            .then(cart => {
              dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
              e.target.innerHTML = "Dodano do koszyka!";
            });
        })
        .catch(e => {
          console.log(e);
        });
    });
  };
  return (
    <div className="add-to-cart">
      <button
        type="submit"
        className="button button-red"
        onClick={e => {
          addToCart(props.product.selected_item.id, e);
          console.log(props.product.quantity);
          e.preventDefault();
        }}
      >
        Dodaj do koszyka
      </button>
      <span>
        za każde sprzedane 250g kawy, przeznaczamy 1zł na rzecz fundacji
        Siepomaga.
      </span>
    </div>
  );
};

export default AddToCartButton;
