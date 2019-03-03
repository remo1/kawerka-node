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
            <div className="copy">
              <div className="arrow" />
              <p>
                Zamów świeżo paloną kawę do swojego miejsca pracy i otrzymaj 10%
                pierwszego zamówienia!
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
