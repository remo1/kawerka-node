import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Menu from "../global/Menu";
import Loading from "../global/Loading";

import { GetProducts } from "../../ducks/products";
import { GetCategories } from "../../ducks/categories";
import { GetCollections } from "../../ducks/collections";
import { fetchHomepage } from "../../ducks/data";

import Footer from "../global/Footer";

require("./OfertaBiurowa.scss");

class OfertaBiurowa extends Component {
  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }
  }

  render() {
    let showOnClick = e => {
      console.log(e.target.nextSibling);
      e.target.nextSibling.classList.toggle("dropdowns-hide");
    };
    if (this.props.products !== null) {
      return (
        <div className="container">
          <Menu />
          <div className="container-rest">
            <div className="oferta-biurowa">
              <div className="oferta-biurowa-header">Oferta dla firm</div>
              <div className="dropdowns">
                <div className="dropdowns-open">
                  <div className="circle" />
                  <div onClick={e => showOnClick(e)} className="dropdowns-text">
                    <span>Kawa w Twoim biurze</span>
                    <span>V</span>
                  </div>
                  <div className="dropdown dropdowns-hide">
                    <p>
                      {" "}
                      <strong>Świetny pomysł!</strong> Kawerka Coffee Company
                      wierzy że dobra kawa poprawia komfort pracy i pozytywnie
                      wpływa na produktywość. Specjalnie przygotowana oferta kaw
                      Single Origin pomoże zmienić Twoje biuro nie do poznania.
                    </p>
                    <p>
                      Nie jesteś osobą decyzyjną jeżeli chodzi o kawę w Twoim
                      biurze? <strong>Nie ma problemu.</strong> Skontaktuj się z
                      nami, a my wyślemy Ci tester do Twojego biura.
                    </p>
                    <p>
                      Jeżeli Twoje biuro nawiąże z nami współprace, otrzymasz
                      10% wartości pierwszego zamówienia!
                    </p>
                    <a href="" className="button button-red">
                      Wyślij email
                    </a>
                    <a href="" className="button button-red">
                      Zadzwoń
                    </a>
                  </div>
                </div>
                <div className="dropdowns-open">
                  <div className="circle" />
                  <div onClick={e => showOnClick(e)} className="dropdowns-text">
                    <span>Kawa w Twojej restauracji</span>
                    <span>V</span>
                  </div>
                  <div className="dropdown dropdowns-hide">
                    <p>
                      <strong>
                        Kawerka posiada szeroką ofertę kaw Single Origin.
                      </strong>{" "}
                      Pozwól swoim klientom wybrać pochodzenie kawy i zaskocz
                      ich nietuzinkowym smakiem espresso.
                    </p>
                    <p>
                      Jeżeli zdecydujesz się na współprace z nami, poza
                      przepyszną kawą,{" "}
                      <strong>
                        przeprowadzimy specjalny kurs, który nauczy Twoich
                        pracowników jak najlepiej przyżądźać kawy Single Origin.
                      </strong>
                    </p>
                    <p>
                      Skontaktuj się z nami jeżeli chcesz dowiedzieć się więcej!
                    </p>
                    <a href="" className="button button-red">
                      Wyślij email
                    </a>
                    <a href="" className="button button-red">
                      Zadzwoń
                    </a>
                  </div>
                </div>
                <div className="dropdowns-open">
                  <div className="circle" />
                  <div onClick={e => showOnClick(e)} className="dropdowns-text">
                    <span>Kawa w Twojej kawiarni</span>
                    <span>V</span>
                  </div>
                  <div className="dropdown dropdowns-hide">
                    <p>
                     Jesteś właścicielem kawiarni? Na pewno znasz i doceniasz smak kaw Single Origin. Z nami możesz być pewien że każde zamówienie jest <strong>świeżo palone i przygotowane specjalnie dla Ciebie.</strong>
                    </p>
                    <p>
                        Wiesz że każde ziarne mogą być wypalone w różnym stopniu. Napisz do nas, a <strong>przygotujemy Twojej kawiarni specjalny profil kawy,</strong> który będzie odpowiadał Twoim wymaganiom.
                    </p>
                    <p>
                      Odezwij się do nas, a my zaopatrzymy Cię w najlepszej jakości kawę.
                    </p>
                    <a href="" className="button button-red">
                      Wyślij email
                    </a>
                    <a href="" className="button button-red">
                      Zadzwoń
                    </a>
                  </div>
                  <div className="circle" />
                </div>
              </div>
              <div className="info-siepomaga">Za każde sprzedane 1000g kawy w ofercie b2b, przeznaczamy 1zł na rzecz Fundacji Siepomaga. Kupując - Pomagasz.</div>
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
      GetCollections,
      fetchHomepage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OfertaBiurowa);
