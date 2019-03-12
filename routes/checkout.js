var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post("/api/checkout", function(req, res, next) {
  let price;

  if (req.body.total_cost > 99) {
    price = req.body.total_cost;
  } else {
    price = req.body.total_cost + 1500;

  }
  // console.log(req.body);

  let bodyPay = {
    notifyUrl: "http://kawerka.pl/order-confirmation",
    continueUrl: "http://google.com",
    customerIp: "127.0.0.1",
    merchantPosId: "893466",
    description: "Kawerka Order",
    currencyCode: "PLN",
    totalAmount: price,
    buyer: {
      email: req.body.customer.email,
      phone: req.body.billing_address.telephone,
      firstName: req.body.shipping_address.first_name,
      lastName: req.body.shipping_address.last_name,
      language: "pl",
      delivery: {
        street: req.body.shipping_address.line_1,
        postalCode: req.body.shipping_address.postcode,
        city: req.body.shipping_address.city,
        countryCode: req.body.shipping_address.country,
        recipientName:
          req.body.shipping_address.first_name +
          " " +
          req.body.shipping_address.last_name
      }
    },
    products: [
      {
        name: "kawa",
        unitPrice: 100,
        quantity: 1
      }
    ],
    settings: {
      invoiceDisabled: "true"
    }
  };

  // console.log(bodyPay);

  let bodyAuth = {
    client_id: "893466",
    client_credentials: "893466",
    client_secret: "b3201143319496e64e8ba0e8a4fd3833",
    grant_type: "client_credentials"
  };

  let urlAuth =
    "https://secure.payu.com/pl/standard/user/oauth/authorize?client_id=" +
    bodyAuth.client_id +
    "&client_credentials=" +
    bodyAuth.client_credentials +
    "&client_secret=" +
    bodyAuth.client_secret +
    "&grant_type=" +
    bodyAuth.grant_type;

  let urlPay = "https://secure.payu.com/api/v2_1/orders";

  let token = () => {
    axios({
      method: "get",
      url: urlAuth
    }).then(resp => payU(resp.data.access_token));
  };

  let payU = token => {
    axios({
      method: "post",
      url: urlPay,
      maxRedirects: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      data: bodyPay
    })
      .then(resp => {
        let json = JSON.parse(resp);
        res.json("asd");
      })
      .catch(e => {
        res.json(e.response.data);
      });
  };

  token();
});

module.exports = router;
