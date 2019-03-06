import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../global/Menu";
import Footer from "../global/Footer";
import { GetProducts } from "../../ducks/products";
import { GetCartItems } from "../../ducks/cart";
import { bindActionCreators } from "redux";
import Loading from "../global/Loading";

import CheckoutItems from "./CheckoutItems";
import StepOne from "./StepOne";

function mapStateToProps(state) {
  return state;
}

class CheckoutContainer extends Component {
  componentDidMount() {
    this.props.GetProducts();
    this.props.GetCartItems();
  }

  render() {
    if (this.props.payments.processing === false && this.props.cart.cart) {
      console.log(this.props);
      return (
        <div className="container">
          <Menu />
          <div className="container-checkout__items">
            <StepOne />
            <CheckoutItems />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCartItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
