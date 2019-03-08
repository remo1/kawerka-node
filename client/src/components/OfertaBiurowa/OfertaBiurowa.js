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
let circle = require("../../assets/img/circle.svg");

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
      e.target.classList.toggle("highlight");
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
                  <div className="circle">
                    <div className="circle-left">
                      <img src={circle} alt="" />
                    </div>
                    <div className="circle-line" />
                    <div className="circle-right">
                      <img src={circle} alt="" />
                    </div>
                  </div>{" "}
                  <div onClick={e => showOnClick(e)} className="dropdowns-text">
                    <span>Kawa w Twoim biurze</span>
                    <span>
                      <img
                        alt=""
                        src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.4.8/collection/icon/svg/ios-arrow-down.svg"
                        height="25px"
                        width="35px"
                      />
                    </span>{" "}
                  </div>
                  <div className="dropdown dropdowns-hide">
                    <p>
                      {" "}
                      <strong>Świetny pomysł!</strong> Kawerka Coffee Company
                      wierzy, że dobra kawa poprawia komfort pracy i pozytywnie
                      wpływa na produktywność. Specjalnie przygotowana oferta
                      kaw Single Origin pomoże zmienić Twoje biuro nie do
                      poznania.
                    </p>
                    <p>
                      Nie wiesz jak to zmienić?{" "}
                      <strong>To bardzo proste.</strong> Skontaktuj się z nami,
                      aby otrzymać tester swieżo palonej kawy do Twojego biura.
                    </p>
                    <p>
                      Jeżeli Twoje biuro nawiąże z nami współpracę, otrzymasz
                      <strong> 10%</strong> wartości pierwszego zamówienia!
                    </p>
                    <a
                      href="mailto:kontakt@kawerka.pl"
                      className="button button-red"
                    >
                      Wyślij email
                    </a>
                    <a href="tel:48730070539" className="button button-red">
                      Zadzwoń
                    </a>
                  </div>
                </div>
                <div className="dropdowns-open">
                  <div className="circle">
                    <div className="circle-left">
                      <img src={circle} alt="" />
                    </div>
                    <div className="circle-line" />
                    <div className="circle-right">
                      <img src={circle} alt="" />
                    </div>
                  </div>{" "}
                  <div onClick={e => showOnClick(e)} className="dropdowns-text">
                    <span>Kawa w Twojej restauracji</span>
                    <span>
                      <img
                        alt=""
                        src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.4.8/collection/icon/svg/ios-arrow-down.svg"
                        height="25px"
                        width="35px"
                      />
                    </span>{" "}
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
                      Jeżeli zdecydujesz się na współpracę z nami, poza
                      przepyszną kawą,{" "}
                      <strong>przeprowadzimy specjalny kurs</strong>, który
                      nauczy Twoich pracowników jak najlepiej przyrządźać kawy
                      Single Origin oraz{" "}
                      <strong>ustawimy Twój ekspres do kawy </strong> pod nasze
                      ziarna!
                    </p>

                    <p>
                      Skontaktuj się z nami, jeżeli chcesz dowiedzieć się
                      więcej!
                    </p>
                    <a
                      href="mailto:kontakt@kawerka.pl"
                      className="button button-red"
                    >
                      Wyślij email
                    </a>
                    <a href="tel:48730070539" className="button button-red">
                      Zadzwoń
                    </a>
                  </div>
                </div>
                <div className="dropdowns-open">
                  <div className="circle">
                    <div className="circle-left">
                      <img src={circle} alt="" />
                    </div>
                    <div className="circle-line" />
                    <div className="circle-right">
                      <img src={circle} alt="" />
                    </div>
                  </div>{" "}
                  <div onClick={e => showOnClick(e)} className="dropdowns-text">
                    <span>Kawa w Twojej kawiarni</span>
                    <span>
                      <img
                        alt=""
                        src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.4.8/collection/icon/svg/ios-arrow-down.svg"
                        height="25px"
                        width="35px"
                      />
                    </span>{" "}
                  </div>
                  <div className="dropdown dropdowns-hide">
                    <p>
                      Jesteś właścicielem kawiarni? Na pewno znasz i doceniasz
                      smak kaw Single Origin. Z nami możesz być pewien, że każde
                      zamówienie jest{" "}
                      <strong>
                        świeżo palone i przygotowane specjalnie dla Ciebie.
                      </strong>
                    </p>
                    <p>
                      Każde ziarna w naszej ofercie mogą być wypalone w różnym
                      stopniu. Napisz do nas, a{" "}
                      <strong>
                        przygotujemy Twojej kawiarni specjalny profil kawy,
                      </strong>{" "}
                      który będzie odpowiadał Twoim wymaganiom.
                    </p>
                    <p>
                      Odezwij się do nas, a my zaopatrzymy Cię w kawę najlepszej
                      jakości.
                    </p>
                    <a
                      href="mailto:kontakt@kawerka.pl"
                      className="button button-red"
                    >
                      Wyślij email
                    </a>
                    <a href="tel:48730070539" className="button button-red">
                      Zadzwoń
                    </a>
                  </div>
                  <div className="circle">
                    <div className="circle-left">
                      <img src={circle} alt="" />
                    </div>
                    <div className="circle-line" />
                    <div className="circle-right">
                      <img src={circle} alt="" />
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="info-siepomaga">
                <p>Kupujesz - Pomagasz!</p>

                <p>
                  {" "}
                  Za każde sprzedane 250g kawy w{" "}
                  <strong>ofercie detalicznej</strong> oraz 1000g kawy w{" "}
                  <strong>ofercie B2B</strong>, przeznaczamy 1zł na rzecz
                  Fundacji Siepomaga.
                </p>
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
      GetCollections,
      fetchHomepage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OfertaBiurowa);
