import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../global/Loading";

import Menu from "../global/Menu";
import Footer from "../global/Footer";
import CartItems from "./CartItems";
import CartPrice from "./CartPrice";

import { GetProducts } from "../../ducks/products";
import { GetCartItems } from "../../ducks/cart";

class Cart extends Component {
  componentDidMount() {
    this.props.GetProducts();
    this.props.GetCartItems();
  }

  render() {
    const { cart, products } = this.props;

    if (
      cart.fetched === true &&
      cart.fetching === false &&
      products.fetched === true
    ) {
      return (
        <div className="container">
          <Menu />
          <div className="container-cart">
            <CartItems />
            <CartPrice />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ products, cart }) => ({
  products,
  cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCartItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
