import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Menu from "../global/Menu";
import Loading from "../global/Loading";

import { GetProducts } from "../../ducks/products";
import { GetCategories } from "../../ducks/categories";
import { GetCollections } from "../../ducks/collections";
import { fetchHomepage } from "../../ducks/data";
import SliderS from "./Slider";
import MostPopular from "./MostPopular";
import BrewGuides from './BrewGuidesHome';
import Biuro from './Biuro';
import Footer from '../global/Footer';


class Home extends Component {


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
    fetch("/home")
      .then(res => res.json())
      .then(items => this.props.fetchHomepage(items));
  }

  render() {
    if (
      this.props.collections !== null &&
      this.props.products !== null &&
      this.props.categories !== null &&
      this.props.data.homepage !== null
    ) {
      return (
        <div className="container">
          <Menu />
          <div className="container-home">
            <SliderS />
       
            <MostPopular />
            <Biuro />
            <BrewGuides />
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
      GetCollections,
      fetchHomepage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
