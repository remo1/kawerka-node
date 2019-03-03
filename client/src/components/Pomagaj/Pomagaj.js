import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Menu from "../global/Menu";
import Loading from "../global/Loading";

import { GetProducts } from "../../ducks/products";
import { GetCategories } from "../../ducks/categories";
import { GetCollections } from "../../ducks/collections";
import Footer from "../global/Footer";

require("./Pomagaj.scss");

class Pomagaj extends Component {
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
                  <div className="header-text">pomagaj z kawerką</div>
                  <div className="copy pomagaj">
                    <p>
                      Kupując kawę przez naszą stronę internetową wspomagasz
                      Fundacje Siepomaga. Wierzymy, że możesz pić doskonałą kawę
                      i jednocześnie pomagać potrzebującym. Właśnie dlatego
                      założyliśmy skarbonkę na stronie internetowej Fundacji
                      Siepomaga.
                    </p>
                    <p>
                    Za każde sprzedane 250g kawy w <strong>ofercie detalicznej</strong>, przeznaczamy 1zł na rzecz Fundacji Siepomaga.
                    </p>
                    <p>
                    Za każde sprzedane 1000g kawy w <strong>ofercie B2B</strong>, przeznaczamy 1zł na rzecz Fundacji Siepomaga.
                    </p>
                    <p>Pamiętaj kupując – pomagasz!</p>
                    <p>Wpłaty do skarbonki są wykonywane raz w miesiącu.</p>
                    <p>
                      <a
                        href="https://siepomaga.pl/kawerka"
                        target="_blank"
                        className="button button-red"
                      >
                        Skarbonka Fundacji Siepomaga
                      </a>
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pomagaj);
