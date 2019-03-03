import React, { Component } from "react";
import { connect } from "react-redux";
import ProductImage from "./ProductImage";
import ProductTitle from "./Buy/ProductTitle";
import ProductBuy from "./Buy/ProductBuy";
import AddToCartButton from "./Buy/AddToCartButton";
import InfoDropdowns from "./InfoDropdowns";
require("./SingleProduct.scss");

const mapStateToProps = state => {
  return state;
};

class SingleProduct extends Component {
  render() {
    console.log(this.props);
    if (this.props.product.selected_item) {
      let item = this.props.product.selected_item;
      return (
        <div className="single-product">
          <div className="single-product-img">
            <ProductImage
              product={this.props.product.selected_item}
              products={this.props.products.products}
            />
          </div>
          <div className="single-product-content">
            <ProductTitle item={item} />
            <ProductBuy
              dispatch={this.props.dispatch}
              product={this.props.product}
            />
            <AddToCartButton
              dispatch={this.props.dispatch}
              product={this.props.product}
              products={this.props.products.products.data}
            />
            <InfoDropdowns item={this.props.product} />
          </div>
        </div>
      );
    } else {
      return <div>asd</div>;
    }
  }
}

export default connect(mapStateToProps)(SingleProduct);
