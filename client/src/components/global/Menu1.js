import React from "react";
import { bindActionCreators } from "redux";

import { Link } from "react-router-dom";
import { Component } from "react";
import { GetCartItems } from "../../ducks/cart";

import { connect } from "react-redux";
require("./Menu.scss");
let logo = require("../../assets/img/logo.svg");

let user = require("../../assets/img/user.svg");
let cart = require("../../assets/img/cart.svg");

function mapStateToProps(state) {
  return state;
}

class HeaderNav extends Component {
  componentWillMount() {
    if (!this.props.cart.fetched) {
      this.props.GetCartItems();
    }
  }
  cartItems() {
    if (this.props.cart.fetched) {
      if (this.props.cart.cart.data.length > 0) {
        return <div className="cart-circle" />;
      }
    }
  }
  openHam(e){
    document.querySelector('.ham').classList.toggle('open');
    document.querySelector('.nav-container').classList.toggle('open');
  }
  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="kawerka coffee company" />
          </Link>
        </div>
        <div onClick={e => this.openHam(e)} className="ham">
          <span />
          <span />
          <span />
        </div>
        <ul>
          <li>
            <Link to="/sklep">sklep</Link>
          </li>
          <li>
            <Link to="/oferta-dla-firm">oferta dla firm</Link>
          </li>
          <li>
            <Link to="/brew-guides">brew guides</Link>
          </li>
          <li>
            <Link className="button-menu" to="/pomagaj-z-kawerka">
              pomagaj z kawerką
            </Link>
          </li>
          <li>
            <Link to="/kontakt">kontakt</Link>
          </li>
          <li>
            <Link to="/koszyk">
              <svg width="41px" height="36px" viewBox="0 0 41 36" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1">
                  <g
                    id="kawerka-cart"
                    transform="translate(-744.000000, -2196.000000)"
                  >
                    <g
                      id="shopping-cart"
                      transform="translate(744.000000, 2196.000000)"
                    >
                      <path
                        d="M37.1334375,21.1864922 L40.4573203,6.56149219 C40.6972969,5.50553906 39.8946797,4.5 38.8117969,4.5 L11.1943125,4.5 L10.5498281,1.34929687 C10.3892344,0.563976563 9.69820313,0 8.89657031,0 L1.6875,0 C0.755507812,0 0,0.755507812 0,1.6875 L0,2.8125 C0,3.74449219 0.755507812,4.5 1.6875,4.5 L6.60114844,4.5 L11.5404609,28.6477734 C10.3587891,29.3273438 9.5625,30.6015469 9.5625,32.0625 C9.5625,34.237125 11.325375,36 13.5,36 C15.674625,36 17.4375,34.237125 17.4375,32.0625 C17.4375,30.9604219 16.9841953,29.9647266 16.2545625,29.25 L30.9953672,29.25 C30.2658047,29.9647266 29.8125,30.9604219 29.8125,32.0625 C29.8125,34.237125 31.575375,36 33.75,36 C35.924625,36 37.6875,34.237125 37.6875,32.0625 C37.6875,30.5035312 36.7813125,29.1563438 35.4671016,28.5183984 L35.8550156,26.8114922 C36.0949922,25.7555391 35.292375,24.75 34.2094922,24.75 L15.3363516,24.75 L14.8761563,22.5 L35.4879141,22.5 C36.2758359,22.5 36.9588516,21.9547969 37.1334375,21.1864922 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              {this.cartItems()}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetCartItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
