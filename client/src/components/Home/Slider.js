import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

let kawa = require("../../assets/img/slider/kawa.png");
let zl = require("../../assets/img/slider/zl.png");
require("./Slider.scss");

export default class SliderS extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
    };
    return (
      <div className="slider-home">
        <Slider {...settings}>
       
          <div className="border">
            <div className="border-line-v-1" />
            <div className="border-line-v-2" />
            <div className="border-line-h-1" />
            <div className="border-line-h-2" />
            <div className="border-top" />
            <div className="border-bottom" />{" "}
            <div className="slider-content">
              <div className="slider-image">
                <img src={kawa} />
              </div>
              <div className="slider-copy">
                <div className="header-text">
                  świeżo palona kawa
                  {/* <span>świeżo</span>
                  <span>palona</span>
                  <span>kawa</span> */}
                </div>
                <div className="copy">
                  <div className="arrow" />
                  <p>
                    Wszystkie ziarna które używamy są etycznie pozyskiwane oraz
                    pochodzą z upraw FAIR TRADE.
                  </p>
                  <a href="/" className="button button-red">
                    ZOBACZ WIĘCEJ!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="border-line-v-1" />
            <div className="border-line-v-2" />
            <div className="border-line-h-1" />
            <div className="border-line-h-2" />
            <div className="border-top" />
            <div className="border-bottom" />{" "}
            <div className="slider-content">
              <div className="slider-image">
                <img src={zl} />
              </div>

              <div className="slider-copy">
                <div className="header-text">pomagaj razem z kawerką</div>
                <div className="copy">
                  <div className="arrow" />
                  <p>
                    Za każde sprzedane 250g kawy w ofercie detalicznej,
                    przeznaczamy 1zł na rzecz Fundacji Siepomaga.
                  </p>
                  <a href="/pomagaj-z-kawerka" className="button button-red">
                    ZOBACZ WIĘCEJ!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
