import React, { Component } from "react";
import { connect } from "react-redux";
import ProductImage from "../Products/ProductImage";

require("./MostPopular.scss");

function mapStateToProps(state) {
  return state;
}

class MostPopular extends Component {
  render() {
    if (this.props.products.products !== null) {
      let mostPopularArray = [];
      let products = this.props.products.products;
      this.props.products.products.data.map(item => {
        if (item.most_popular === true) {
          mostPopularArray.push(item);
        }
      });
      console.log(mostPopularArray);
      return (
        <div className="most-popular-wrapper">
          <div className="most-popular-header">najchętniej kupowane:</div>
          <div className="most-popular-items">
            {mostPopularArray.map((item, index) => {
              return (
                <a
                  className="most-popular"
                  href={"/kawa/" + item.id}
                  key={index}
                >
                  <ProductImage product={item} products={products} />
                  <div className="most-popular-title">{item.name}</div>
                  <div className="most-popular-taste">{item.smak.replace('-', '∙')}</div>
                  <div className="arrow" />
                  <div className="most-popular-info">{item.origin}</div>
                  <div className="most-popular-price">od {item.price[0].amount / 100}zł</div>

                </a>
              );
            })}
          </div>
          <a href='/sklep' className="button button-red most-popular-button"> zobacz wszystkie produkty </a>
        </div> 
      );
    } else {
      return <div>1</div>;
    }
  }
}

export default connect(mapStateToProps)(MostPopular);
