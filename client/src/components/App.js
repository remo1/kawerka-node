import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import ProductsContainer from "./Products/ProductsContainer";
import SingleProductContainer from "./Products/SingleProductContainer";

import Cart from "./Cart/Cart";
import CheckoutContainerItems from "./CheckoutItems/CheckoutContainerItems";
import CheckoutContainerForm from "./CheckoutContainerForm/CheckoutContainerForm";

import OrderConfirmationContainer from "./Orders/OrderConfirmationContainer";
import OfertaBiurowa from "../components/OfertaBiurowa/OfertaBiurowa";
import BrewGuides from "../components/BrewGuides/BrewGuides";
import NotFound from "./global/NotFound";
import Platnosci from "./Info/Platnosci";
import Regulamin from "./Info/Regulamin";
import Wysylka from "./Info/Wysylka";
import Contact from "./Contact/Contact";
import Pomagaj from "./Pomagaj/Pomagaj";

require("./global/global.scss");

const App = props => (
  <div>
    {/* <MobileNav /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sklep/" component={ProductsContainer} />
      <Route path="/kawa/:id" component={SingleProductContainer} />
      <Route path="/koszyk" component={Cart} />
      <Route path="/checkout" component={CheckoutContainerItems} />
      <Route path="/checkout-form" component={CheckoutContainerForm} />

      <Route
        path="/order-confirmation"
        component={OrderConfirmationContainer}
      />
      <Route path="/oferta-dla-firm" component={OfertaBiurowa} />
      <Route path="/brew-guides" component={BrewGuides} />
      <Route path="/regulamin" component={Regulamin} />
      <Route path="/platnosci" component={Platnosci} />
      <Route path="/wysylka" component={Wysylka} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/pomagaj-z-kawerka" component={Pomagaj} />

      {/*
      <Route path="/styles" component={} /> */}

      {/*  <Route
        path="/one-click-checkout/:productId"
        component={OneClickCheckout}
      />
      <Route path="*" component={NotFound} /> */}
    </Switch>

    {/* <Footer /> */}
  </div>
);

export default App;
