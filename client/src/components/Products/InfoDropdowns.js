import React, { Component } from "react";

require("./InfoDropdowns.scss");

const InfoDropdowns = props => {
  let showOnClick = e => {
    console.log(e.target.nextSibling);
    e.target.nextSibling.classList.toggle("dropdowns-hide");
  };
  return (
    <div className="dropdowns">
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>ziarna</span>
          <span>V</span>
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
          <span>V</span>
        </div>
        <div className="dropdown dropdowns-hide">
         Kupując kawę na naszej stronie internetowej wspomagasz Fundację Siepomaga.
         <p>Za każde sprzedane 250g kawy, przeznaczamy 1zł na rzecz Fundacji Siepomaga. Więcej informacji możesz znaleźć na <a href="/pomagaj-z-kawerka" className="button button-normal">pomagaj z kawerką</a></p>
        </div>
      </div>
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>brew tips</span>
          <span>V</span>
        </div>
        <div className="dropdown dropdowns-hide">
          Najlepiej zaparzyć w: Chemex, Aeropress, Kawiarka i French Press.
          <p> Sprawdź nasz dział <a className="button button-normal" href="/brew-guides">brew guides</a>, aby dowiedzieć się jak prawidłowo zaparzyć świeżo paloną kawerkę! </p>

        </div>
      </div>
      <div className="dropdowns-open">
        <div className="circle" />
        <div onClick={e => showOnClick(e)} className="dropdowns-text">
          <span>kawerka w twoim biurze</span>
          <span>V</span>
        </div>
        <div className="dropdown dropdowns-hide">
          Posiadamy specjalną ofertę dla biur i miejsc pracy. 
          <p>już dzisiaj możesz otrzymać 10% od pierwszego zamówienia w Twoim biurze.</p>
          <p>Wiecej informacji na <a className="button button-normal" href="/oferta-dla-firm">oferta dla firm</a></p>
        </div>
        <div className="circle" />
      </div>
    </div>
  );
};

export default InfoDropdowns;
