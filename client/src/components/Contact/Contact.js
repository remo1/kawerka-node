import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Menu from "../global/Menu";
import Loading from "../global/Loading";

import { GetProducts } from "../../ducks/products";
import { GetCategories } from "../../ducks/categories";
import { GetCollections } from "../../ducks/collections";
import Footer from "../global/Footer";

require("./Contact.scss");
let fb = require("../../assets/img/fb-black.svg");
let insta = require("../../assets/img/insta-black.svg");

class Contact extends Component {
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
                  <div className="header-text">kontakt</div>
                  <div className="copy contact">
                    <div className="contact-p">
                      Jeżeli chcsz się z nami skontaktować
                      <ul>
                        <li>
                          <a
                            href="mailto:kontakt@kawerka.pl"
                            className="button button-red"
                          >
                            Wyślij email
                          </a>
                        </li>
                        <li> lub, </li>
                        <li>
                          <a href="tel:730070539" className="button button-red">
                            Zadzwoń
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="contact-p contact-s">
                      Sprawdź nasze social media!
                      <ul>
                        <li>
                          <a
                            className="icon"
                            href="https://www.instagram.com/kawerka.co"
                            target="_blank"
                          >
                            <img src={insta} />
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon"
                            href="https://fb.me/kawerka"
                            target="_blank"
                          >
                            <img src={fb} />
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
