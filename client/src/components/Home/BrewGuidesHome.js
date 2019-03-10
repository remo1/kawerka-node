import React, { Component } from "react";
import { connect } from "react-redux";
let arrow = require("../../assets/img/arrow.svg");

require("./BrewGuidesHome.scss");
let brew = require("../../assets/img/BrewGH.png");
function mapStateToProps(state) {
  return state;
}

class BrewGuidesHome extends Component {
  render() {
    return (
      <div className="border brew-guides">
        <div className="border-line-v-1" />
        <div className="border-line-v-2" />
        <div className="border-line-h-1" />
        <div className="border-line-h-2" />
        <div className="border-top" />
        <div className="border-bottom" />
        <div className="slider-content">
          <div className="slider-image">
            <img src={brew} />
          </div>
          <div className="slider-copy">
            <div className="header-text">brew guides</div>
            <div className="copy">
              <div className="arrow">
                <div className="arrow-left">
                  <img src={arrow} alt="" />
                </div>
                <div className="arrow-line" />

                <div className="arrow-right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <p>Cztery sposoby na przygotowanie przepysznej Kawerki.</p>
              <a href="/brew-guides" className="button button-red">
                ZOBACZ WIĘCEJ!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BrewGuidesHome);
