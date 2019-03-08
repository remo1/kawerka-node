import React, { Component } from "react";

require("./InfoDropdowns.scss");

const InfoDropdowns = props => {
  let showOnClick = e => {
    e.target.nextSibling.classList.toggle("dropdowns-hide");
    e.target.classList.toggle("highlight");
  };
  return (
    <div className="dropdowns">
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>ziarna</span>
          <span>
            <img
              alt=""
              src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.4.8/collection/icon/svg/ios-arrow-down.svg"
              height="25px"
              width="35px"
            />
          </span>{" "}
        </div>
        <div className="dropdown dropdowns-hide ziarna">
          <ul>
            <li>
              <span>Region:</span> {props.item.selected_item.a1}
            </li>
            <li>
              <span>Farma:</span> {props.item.selected_item.a2}
            </li>
            <li>
              <span>Wysokość uprawy:</span> {props.item.selected_item.a3}
            </li>
            <li>
              <span>Metoda suszenia:</span> {props.item.selected_item.a4}
            </li>
          </ul>
        </div>
      </div>
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>kupujesz - pomagasz</span>
          <span>
            <img
              alt=""
              src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.4.8/collection/icon/svg/ios-arrow-down.svg"
              height="25px"
              width="35px"
            />
          </span>
        </div>
        <div className="dropdown dropdowns-hide">
          Za każde sprzedane 250g kawy, przeznaczamy 1zł na rzecz Fundacji
          Siepomaga.
          <p>
            Więcej informacji możesz znaleźć na{" "}
            <a href="/pomagaj-z-kawerka" className="button button-normal">
              pomagaj z kawerką.
            </a>
          </p>
        </div>
      </div>
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>brew tips</span>
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
          Najlepiej zaparzyć w: Chemex, Aeropress, Kawiarka i French Press.
          <p>
            {" "}
            Sprawdź nasz dział{" "}
            <a className="button button-normal" href="/brew-guides">
              brew guides
            </a>, aby dowiedzieć się jak prawidłowo zaparzyć świeżo paloną
            kawerkę!{" "}
          </p>
        </div>
      </div>
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>kawerka w twoim biurze</span>
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
          Już dzisiaj możesz otrzymać <strong>10%</strong> wartości pierwszego
          zamówienia kawy w Twoim biurze.
          <p>
            Wiecej informacji na{" "}
            <a className="button button-normal" href="/oferta-dla-firm">
              oferta dla firm.
            </a>
          </p>
        </div>
        <div className="circle" />
      </div>
    </div>
  );
};

export default InfoDropdowns;
