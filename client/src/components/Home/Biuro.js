import React, { Component } from "react";
import { connect } from "react-redux";

require("./Biuro.scss");

let biuro = require("../../assets/img/biuro.png");
function mapStateToProps(state) {
  return state;
}

class Biuro extends Component {
  render() {
    return (
      <div className="border biuro">
        <div className="border-line-v-1" />
        <div className="border-line-v-2" />
        <div className="border-line-h-1" />
        <div className="border-line-h-2" />
        <div className="border-top" />
        <div className="border-bottom" />
        <div className="slider-content">
          <div className="slider-image">
            <img src={biuro} />
          </div>
          <div className="slider-copy">
            <div className="header-text">oferta dla firm</div>
            <div className="arrow" />

            <div className="copy">
              <p>
                Nie smakuje Ci kawa w Twoim biurze? Zaproponuj Kawerkę i otrzymaj <strong>10%</strong> wartości pierwszego zamówienia.
              </p>
              <a href="/oferta-dla-firm" className="button button-red">
                ZOBACZ WIĘCEJ!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Biuro);
