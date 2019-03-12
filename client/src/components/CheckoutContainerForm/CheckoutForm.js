import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";

import * as api from "../../moltin";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import axios from "axios";

import {
  SEND_TO_PAYU,
  SUBMIT_PAYMENT,
  PAYMENT_COMPLETE
} from "../../ducks/payments";

require("./CheckoutForm.scss");

function mapStateToProps(state) {
  return {
    push: state,
    formsInfo: state.form.CheckoutForm,
    cart: state.cart.cart,
    payments: state.payments
  };
}

var CheckoutTemplate = {
  customer: {
    name: "John Doe",
    email: "john@doe.co"
  },
  shipping_address: {
    first_name: "John",
    last_name: "Doe",
    line_1: "2nd Floor British India House",
    line_2: "15 Carliol Square",
    city: "Newcastle Upon Tyne",
    postcode: "NE1 6UF",
    county: "Tyne & Wear",
    country: "United Kingdom"
  },
  billing_address: {
    first_name: "John",
    last_name: "Doe",
    line_1: "2nd Floor British India House",
    line_2: "15 Carliol Square",
    city: "Newcastle Upon Tyne",
    postcode: "NE1 6UF",
    county: "Tyne & Wear",
    country: "United Kingdom"
  }
};
const payment = {
  gateway: "manual",
  method: "authorize"
};

const required = value => (value ? undefined : "Wymagane pole!");
const maxLength = max => value =>
  value && value.length > max
    ? `Maksymalna ilość znaków to ${max}!`
    : undefined;
const maxLength50 = maxLength(50);
const number = value =>
  value && isNaN(Number(value)) ? "Wpisz numer" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue3 = minValue(3);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Niepoprawny adres email"
    : undefined;

const renderField = ({
  input,
  placeholder,
  type,
  checked,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} checked={checked} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class CheckoutForm extends Component {
  handleKeyDown = function(e) {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();
    }
  };

  handleClick = e => {
    console.log(this.props);
    if (
      !this.props.formsInfo.syncErrors.name &&
      !this.props.formsInfo.syncErrors.email
    ) {
      e.target.parentNode.parentNode.parentNode.classList.add("verified");
      e.target.parentNode.parentNode.parentNode.classList.add("collapsed");
      console.log(e.target.parentNode.parentNode.parentNode.nextSibling);
      e.target.parentNode.parentNode.parentNode.nextSibling.classList.remove(
        "collapsed"
      );
      // e.target.parentNode.parentNode.parentNode.nextSibling.classList.add(
      //   "collapsed"
      // );
      e.target.parentNode.parentNode.parentNode.nextSibling.classList.remove(
        "disabled"
      );
      e.target.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.remove(
        "disabled"
      );
    } else {
      e.target.innerHTML = "Wpisz imię oraz email i spróbuj ponownie.";
    }
  };

  mySubmit = values => {
    let grind = [];

    this.props.cart.data.map(item => {
      grind.push(item.id);
    });


    CheckoutTemplate.total_cost = this.props.cart.meta.display_price.with_tax.amount > 9900 ? this.props.cart.meta.display_price.with_tax.amount : this.props.cart.meta.display_price.with_tax.amount + 1500;

    CheckoutTemplate.customer.name = values.name;
    CheckoutTemplate.customer.email = values.email;

    CheckoutTemplate.shipping_address.first_name = values.shipping_firstname;
    CheckoutTemplate.shipping_address.last_name = values.shipping_lastname;
    CheckoutTemplate.shipping_address.phone_number =
      values.shipping_phone_number;
    CheckoutTemplate.shipping_address.line_1 = values.shipping_address_1;
    CheckoutTemplate.shipping_address.line_2 = grind.join(" ");
    CheckoutTemplate.shipping_address.city = values.shipping_city;
    CheckoutTemplate.shipping_address.postcode = values.shipping_postcode;
    CheckoutTemplate.shipping_address.country = values.shipping_country;
    CheckoutTemplate.shipping_address.county = values.shipping_county || " ";

    if (this.props.formsInfo.values.fvat === true) {
      CheckoutTemplate.shipping_address.company_name =
        values.billing_company + " " + values.billing_nip;
      CheckoutTemplate.billing_address.first_name = values.billing_firstname;
      CheckoutTemplate.billing_address.last_name = values.billing_lastname;
      CheckoutTemplate.billing_address.phone_number =
        values.billing_phone_number;
      CheckoutTemplate.billing_address.line_1 = values.billing_address_1;
      CheckoutTemplate.billing_address.line_2 = values.billing_address_2;
      CheckoutTemplate.billing_address.postcode = values.billing_postcode;
      CheckoutTemplate.billing_address.country = values.billing_country;
      CheckoutTemplate.billing_address.county = values.shipping_county || " ";

      CheckoutTemplate.billing_address.city = values.billing_city;
      CheckoutTemplate.billing_address.company_name = values.billing_company;
      CheckoutTemplate.billing_address.telephone = values.billing_company;
    } else {
      CheckoutTemplate.billing_address = CheckoutTemplate.shipping_address;
    }
    
    axios.post("/api/checkout", CheckoutTemplate).then(res => {
      this.props.dispatch(dispatch => {
        dispatch({ type: SEND_TO_PAYU, payload: res.data });
      });

      console.log(res);

      api
        .Checkout(CheckoutTemplate)

        .then(order => {
          api.OrderPay(order.data.id, payment);
          api.DeleteCart().then(() => {
            window.location.replace(res.data.redirectUri);
          });
        })

        .catch(e => {
          console.log(e);
        })

        .catch(e => {
          console.log(e);
        });
    });
  };
  formError(e) {
    if (this.props.formsInfo.syncErrors !== undefined) {
      if (this.props.formsInfo.syncErrors[e.target.name] !== undefined) {
        e.target.classList.add("form-error");
      } else {
        e.target.classList.remove("form-error");
      }
    }
  }
  open(e) {
    if (
      !e.target.parentNode.parentNode.classList.contains("disable") &&
      e.target.parentNode.parentNode.classList.contains("verified")
    ) {
      e.target.parentNode.parentNode.classList.toggle("collapsed");
    }
  }
  fvat() {
    if (this.props.formsInfo !== undefined) {
      if (this.props.formsInfo.values.fvat === true) {
        document.querySelector(".billing").classList.remove("collapsed");
        return (
          <div className="form-content">
            <div className="form-fields">
              <label className="input-wrap firstname required">
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  placeholder="Nazwa Firm"
                  validate={[maxLength50]}
                  name="billing_company"
                  type="text"
                  aria-label="First name"
                />
              </label>
              <label className="input-wrap address-2 required">
                <span className="hide-content">Address line 1</span>
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  validate={[maxLength50]}
                  placeholder="NIP"
                  name="billing_nip"
                  type="text"
                  aria-label="Address line 1"
                />
              </label>
              <label className="input-wrap firstname required">
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  placeholder="Imię"
                  validate={[maxLength50]}
                  name="billing_firstname"
                  type="text"
                  aria-label="First name"
                />
              </label>
              <label className="input-wrap lastname required">
                <span className="hide-content">Last name</span>
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  placeholder="Nazwisko"
                  validate={[maxLength50]}
                  placeholder="Nazwisko"
                  name="billing_lastname"
                  type="text"
                  aria-label="Last name"
                />
              </label>
              <label className="input-wrap company">
                <span className="hide-content">Company</span>
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  placeholder="Numer telefonu"
                  validate={[maxLength50, number]}
                  name="billing_phone_number"
                  type="text"
                  aria-label="Company"
                />
              </label>
              <label className="input-wrap address-1 required">
                <span className="hide-content">Address line 1</span>
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  placeholder="Adres"
                  validate={[maxLength50]}
                  placeholder="Adres"
                  name="billing_address_1"
                  type="text"
                  aria-label="Address line 1"
                />
              </label>

              <label className="input-wrap state required">
                <span className="hide-content">State or county</span>
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  validate={[maxLength50]}
                  placeholder="Miasto"
                  name="billing_city"
                  type="text"
                  aria-label="State / County"
                />
              </label>
              <label className="input-wrap postcode required">
                <span className="hide-content">Postcode</span>
                <Field
                  component={renderField}
                  onBlur={e => this.formError(e)}
                  validate={[maxLength50]}
                  placeholder="Kod pocztowy"
                  id="billing_postcode"
                  name="billing_postcode"
                  type="text"
                  aria-label="Postcode"
                />
              </label>
              <div className="input-wrap country">
                <label className="required select-fallback">
                  <span className="hide-content">Country</span>
                  <Field
                    component="select"
                    id="billing_country"
                    required="required"
                    name="billing_country"
                  >
                    <option value="">Wybierz Państwo</option>
                    <option value="PL">Polska</option>
                  </Field>
                </label>
              </div>
            </div>
          </div>
        );
      } else {
        document.querySelector(".billing").classList.add("collapsed");
      }
    }
  }

  render() {
    return (
      <section className="checkout-form">
        <div className="content">
          <form
            className="checkout-form"
            noValidate
            onSubmit={this.props.handleSubmit(this.mySubmit)}
            onKeyDown={e => {
              this.handleKeyDown(e);
            }}
          >
            <fieldset className="details border checkout-b">
              <div className="border-line-v-1" />
              <div className="border-line-v-2" />
              <div className="border-line-h-1" />
              <div className="border-line-h-2" />
              <div className="border-top" />
              <div className="border-bottom" />
              <div className="border-content">
                <span onClick={e => this.open(e)} className="border-title ">
                  twoje informacje
                </span>

                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap name required">
                      <Field
                        component={renderField}
                        className="name"
                        placeholder="Imię"
                        onBlur={e => this.formError(e)}
                        name="name"
                        type="text"
                        aria-label="Name"
                        validate={[required, maxLength50]}
                      />
                    </label>
                    <label className="input-wrap email required">
                      <Field
                        component={renderField}
                        className="email"
                        onBlur={e => this.formError(e)}
                        placeholder="Email"
                        name="email"
                        type="text"
                        aria-label="email"
                        validate={[required, maxLength50, email]}
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={e => this.handleClick(e)}
                    className="continue button button-red"
                  >
                    Przejdź dalej
                  </button>
                </div>
              </div>
            </fieldset>

            <fieldset className="delivery collapsed border checkout-b disabled">
              <div className="border-line-v-1" />
              <div className="border-line-v-2" />
              <div className="border-line-h-1" />
              <div className="border-line-h-2" />
              <div className="border-top" />
              <div className="border-bottom" />
              <div className="border-content">
                <span className="border-title">dane do Wysyłki</span>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap firstname required">
                      <Field
                        component={renderField}
                        onBlur={e => this.formError(e)}
                        placeholder="Imię"
                        validate={[required, maxLength50]}
                        name="shipping_firstname"
                        type="text"
                        aria-label="First name"
                      />
                    </label>
                    <label className="input-wrap lastname required">
                      <span className="hide-content">Last name</span>
                      <Field
                        component={renderField}
                        onBlur={e => this.formError(e)}
                        placeholder="Nazwisko"
                        validate={[required, maxLength50]}
                        placeholder="Nazwisko"
                        name="shipping_lastname"
                        type="text"
                        aria-label="Last name"
                      />
                    </label>
                    <label className="input-wrap company">
                      <span className="hide-content">Company</span>
                      <Field
                        component={renderField}
                        onBlur={e => this.formError(e)}
                        placeholder="Numer telefonu"
                        validate={[required, maxLength50, number]}
                        name="shipping_phone_number"
                        type="text"
                        aria-label="Company"
                      />
                    </label>
                    <label className="input-wrap address-1 required">
                      <span className="hide-content">Address line 1</span>
                      <Field
                        component={renderField}
                        onBlur={e => this.formError(e)}
                        placeholder="Adres"
                        validate={[required, maxLength50]}
                        placeholder="Adres"
                        name="shipping_address_1"
                        type="text"
                        aria-label="Address line 1"
                      />
                    </label>
                    <label className="input-wrap state required">
                      <span className="hide-content">State or county</span>
                      <Field
                        component={renderField}
                        onBlur={e => this.formError(e)}
                        validate={[required, maxLength50]}
                        placeholder="Miasto"
                        name="shipping_city"
                        type="text"
                        aria-label="State / County"
                      />
                    </label>
                    <label className="input-wrap postcode required">
                      <span className="hide-content">Postcode</span>
                      <Field
                        component={renderField}
                        onBlur={e => this.formError(e)}
                        validate={[required, maxLength50]}
                        placeholder="Kod pocztowy"
                        id="shipping_postcode"
                        name="shipping_postcode"
                        type="text"
                        aria-label="Postcode"
                      />
                    </label>
                    <div className="input-wrap country">
                      <label className="required select-fallback">
                        <span className="hide-content">Country</span>
                        <Field
                          component="select"
                          id="shipping_country"
                          required="required"
                          validate={[required]}
                          name="shipping_country"
                        >
                          <option value="">Wybierz Państwo</option>
                          <option value="PL">Polska</option>
                        </Field>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="billing collapsed border checkout-b disabled">
              <div className="border-line-v-1" />
              <div className="border-line-v-2" />
              <div className="border-line-h-1" />
              <div className="border-line-h-2" />
              <div className="border-top" />
              <div className="border-bottom" />
              <div className="border-content">
                <span className="border-title">
                  {" "}
                  <Field
                    component={renderField}
                    type="checkbox"
                    name="fvat"
                    id="fvat"
                  />
                  Faktura VAT
                </span>
                {this.fvat()}
              </div>
            </fieldset>
            <p className="reg">
              Przechodząc do płatności akceptujesz{" "}
              <a href="/regulamin">regulamin.</a>
            </p>
            <button
              // disabled={
              //   this.props.invalid ||
              //   this.props.submitting ||
              //   this.props.pristine
              // }
              className="submit button button-red"
              type="submit"
            >
              Zamawiam i płace z PayU
            </button>
          </form>
        </div>
      </section>
    );
  }
}

CheckoutForm = reduxForm({
  form: "CheckoutForm",
  initialValues: {
    fvat: false
  }
})(CheckoutForm);

export default connect(mapStateToProps)(CheckoutForm);
