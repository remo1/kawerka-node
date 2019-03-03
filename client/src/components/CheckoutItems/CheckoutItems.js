import React, { Component } from "react";
import { connect } from "react-redux";
import ProductImage from "../Products/ProductImage";
import { Link } from "react-router-dom";

require("./CheckoutItems.scss");
function mapStateToProps(state) {
  return state;
}

class CheckoutItems extends Component {
  totalCost() {
    if (this.props.cart.fetched === true) {
      let totalCost = 0;
      this.props.cart.cart.data.map(item => {
        totalCost += item.value.amount;
      });
      return totalCost / 100;
    }
  }
  delivery() {
    if (this.totalCost() < 99) {
      return 15;
    } else {
      return 0;
    }
  }

  render() {
    if (
      this.props.cart.fetched === true &&
      this.props.products.fetched === true
    ) {
      var items = this.props.cart.cart.data;
      var products = this.props.products.products;
      var itemsInBasket = 0;
      items.map(item => {
        itemsInBasket += item.quantity;
      });

      return (
        <div className="checkout">
          <div className="border">
            <div className="border-line-v-1" />
            <div className="border-line-v-2" />
            <div className="border-line-h-1" />
            <div className="border-line-h-2" />
            <div className="border-top" />
            <div className="border-bottom" />
            <div className="slider-content">
              <div className="slider-copy">
                <div className="checkout-header">podsumowanie zakupu</div>
                {items.map(function(item) {
                  var productArray = products.data.filter(function(product) {
                    return product.id === item.product_id;
                  });
                  var product = productArray[0];
                  return (
                    <div key={item.id} className="checkout-item">
                      <div className="checkout-item-name">{product.name}</div>
                      <div className="checkout-item-other">
                        Kraj Pochodzenia: <span>{product.origin}</span>
                      </div>

                      <div className="checkout-item-other">
                        Rodzaj Zmielenia: <span>{product.grind}</span>
                      </div>
                      <div className="checkout-item-other">
                        Waga:<span> {item.quantity * 250}g</span>
                      </div>
                      <div className="checkout-item-other">
                        Cena:<span>
                          {" "}
                          {item.unit_price.amount * item.quantity / 100}zł
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="checkout-item checkout-postage">
                  Wysyłka: <span>{this.delivery()}zł</span>
                </div>
                <div className="checkout-item checkout-help checkout-postage">
                  Przekazujemy na skarbonkę Fundacji Siepomaga:{" "}
                  <span>{itemsInBasket + "zł"}</span>
                </div>
                <div className="checkout-item checkout-total">
                  <p>całkowity koszt</p>
                  <p>{this.totalCost() + this.delivery()}zł</p>
                </div>
              </div>
            </div>
          </div>
          <Link className="button button-red" to="/checkout-form"> przejdz dalej </Link>

        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(mapStateToProps)(CheckoutItems);
