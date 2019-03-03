import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../global/Menu";
import Footer from "../global/Footer";

import SingleProduct from "./SingleProduct";

import Loading from "../global/Loading";
import { selectedProduct } from "../../ducks/product";

import { GetProducts } from "../../ducks/products";

class Product extends Component {
  componentDidMount() {
    const { fetched } = this.props;
    if (!fetched) {
      this.props.GetProducts()
      .then(item => {
        let sItem = this.props.products.data.find(
          selected => selected.id === this.props.match.params.id
        );
        this.props.selectedProduct(sItem);
      });
    }
  }

  render() {
    const { products } = this.props;
    if (products) {
      return (
        <div className="container">
          <Menu />
          <div className="container-product">
            <SingleProduct />
          </div>
          <Footer />
        </div>
      );
    } else {
      return <div>asd</div>;
    }
  }
}

const mapStateToProps = ({ products: { fetched, products } }) => ({
  fetched,
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      selectedProduct
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
