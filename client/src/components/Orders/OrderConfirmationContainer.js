import React, { Component } from "react";
import { connect } from "react-redux";
import * as api from "../../moltin";

import OrderConfirmation from "./OrderConfirmation";
import Menu from "../global/Menu";
import Footer from "../global/Footer";
function mapStateToProps(state) {
  return {
    state
  };
}
class OrderConfirmationContainer extends Component {
    componentDidMount(){

    // api
    //   .Checkout(CheckoutTemplate)

    // .then(order => {
    //   api.OrderPay(order.data.id, PaymentTemplate);
    //   api.DeleteCart();
    // })

    // .then(() => {
    //   this.props.dispatch(dispatch => {
    //     dispatch({ type: PAYMENT_COMPLETE });
    //   });
    // })

    // .catch(e => {
    //   console.log(e);
    // })

    // .catch(e => {
    //   console.log(e);
    // })

    // .catch(e => {
    //   console.log(e);
    // });
    }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Menu />
        <div className="container-rest">
          <OrderConfirmation />
        </div>
        <Footer />
      </div>
    );
  }
}
export default connect(mapStateToProps)(OrderConfirmationContainer);
