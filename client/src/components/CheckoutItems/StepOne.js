import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../global/Menu";
import Footer from "../global/Footer";
import { GetProducts } from "../../ducks/products";
import { GetCartItems } from "../../ducks/cart";
import { bindActionCreators } from "redux";

import CheckoutItems from "./CheckoutItems";
require('./StepOne.scss');

function mapStateToProps(state) {
  return state;
}

class StepOne extends Component {
  componentDidMount() {
    this.props.GetProducts();
    this.props.GetCartItems();
  }

  render() {
    if (this.props.payments.processing === false) {
      console.log(this.props);
      return (
        <div className="step">
          <div className="step-wrap active-without center">
            <div className="step-circle">1</div>
            <div className="step-info">Podsumowanie Zakupu</div>
          </div>
          <div className="step-wrap center">
            <div className="step-circle">2</div>
            <div className="step-info">Twoje dane</div>
          </div>
          <div className="step-wrap center">
            <div className="step-circle">3</div>
            <div className="step-info">Płatność</div>
          </div>
          <div className="step-wrap center">
            <div className="step-circle">4</div>
            <div className="step-info">Potwierdzenie</div>
          </div>
        </div>
      );
    } else {
      return <div />;
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

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
