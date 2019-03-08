import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Menu from "../global/Menu";
import Loading from "../global/Loading";

import { GetProducts } from "../../ducks/products";
import { GetCategories } from "../../ducks/categories";
import { GetCollections } from "../../ducks/collections";
import Footer from "../global/Footer";

require("./Regulamin.scss");

class Wysylka extends Component {
  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }

    if (!categories.fetched) {
      this.props.GetCategories();
    }

    if (!collections.fetched) {
      this.props.GetCollections();
    }
  }

  render() {
    if (
      this.props.collections !== null &&
      this.props.products !== null &&
      this.props.categories !== null
    ) {
      return (
        <div className="container">
          <Menu />
          <div className="container-rest regulamin">
            <div className="border">
              <div className="slider-content">
                <div className="slider-copy">
                  <div className="header-text">wysyłka</div>
                  <div className="copy">
      <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                    <p>
                      {" "}
                      Zależy nam aby wszystkie paczki były dostarczone na czas i
                      w idealnym stanie. Dlatego wysyłamy tylko firmą kurierską
                      DHL.
                    </p>
                    <img src="https://www.logistics.dhl/content/dam/dhl/global/core/images/logos/dhl-logo.svg" />
                  </div>
                </div>
              </div>
            </div>
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

const mapStateToProps = ({ products, categories, collections, data }) => ({
  products,
  categories,
  collections,
  data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCategories,
      GetCollections
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Wysylka);
