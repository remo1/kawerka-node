import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../global/Loading";

import ProductImage from "./ProductImage";
require("./AllProducts.scss");
let arrow = require("../../assets/img/arrow.svg");

const AllProducts = props => {
  if (props.products !== undefined) {
    return (
      <div className="show-all-wrapper">
        <div className="show-all-header">kawa</div>
        <div className="show-all-items">
          {props.products.data.map((item, index) => {
            if (item.display_item === true) {
              return (
                <a className="show-all" href={"/kawa/" + item.id} key={index}>
                  <ProductImage product={item} products={props.products} />
                  <div className="show-all-title">{item.name}</div>
                  <div className="show-all-taste">{item.smak}</div>
                  <div className="arrow">
                    <div className="arrow-left">
                      <img src={arrow} alt="" />
                    </div>
                    <div className="arrow-line" />

                    <div className="arrow-right">
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="show-all-info">{item.origin}</div>
                  <div className="show-all-price">
                    od {item.price[0].amount / 100}zł
                  </div>
                </a>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    <div>
      <Loading />
    </div>;
  }
};

export default AllProducts;
