import React from "react";
let fb = require("../../assets/img/fb.svg");
let insta = require("../../assets/img/insta.svg");

const Footer = () => (
  <div className="footer">
    <div className="footer-company">kawerka coffee company © 2018</div>
    <div className="footer-links">
    <ul>
      <li>
        <a className="link" href="/regulamin">
          regulamin
        </a>
      </li>
      <li>
        <a className="link" href="/platnosci">
          płatności
        </a>
      </li>
      <li>
        <a className="link" href="/wysylka">
          wysyłka
        </a>
      </li>
    </ul>
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
        <a className="icon" href="https://fb.me/kawerka" target="_blank">
          <img src={fb} />
        </a>
      </li>
    </ul>
    </div>
  </div>
);

export default Footer;
