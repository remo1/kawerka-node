import React, { Component } from "react";
import { connect } from "react-redux";

require("./ProductTitle.scss");
let arrow = require("../../../assets/img/arrow.svg");

const ProductTitle = props => {
  return (
    <div className="border single-product-description">
      <div className="border-line-v-1" />
      <div className="border-line-v-2" />
      <div className="border-line-h-1" />
      <div className="border-line-h-2" />
      <div className="border-top" />
      <div className="border-bottom" />
      <div className="border-content">
        <div className="border-copy">
          <div className="single-product-description-name">
            {props.item.name}
          </div>
          <div className="arrow">
            <div className="arrow-left">
              <img src={arrow} alt="" />
            </div>
            <div className="arrow-line" />

            <div className="arrow-right">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="single-product-description-taste">
            <div className="single-product-description-taste-taste">
              {" "}
              {props.item.description_buy}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
