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

let french = require("../../assets/img/brew/french.png");
let moka = require("../../assets/img/brew/moka.png");
let aero = require("../../assets/img/brew/aeropress.png");
let chemex = require("../../assets/img/brew/chemex.png");

require("./BrewGuides.scss");

class BrewGuides extends Component {
  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }
  }
  smoothScroll(e) {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth", alignToTop: false });
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
          <div className="container-home">
            <div className="brew">
              <div className="brew-header">Brew Guides</div>
              <div className="brew-methods">
                <a
                  href="#french"
                  onClick={e => this.smoothScroll(e)}
                  className="brew-methods-item"
                >
                  <img src={french} />
                  <span>French Press</span>
                </a>
                <a
                  href="#moka"
                  onClick={e => this.smoothScroll(e)}
                  className="brew-methods-item"
                >
                  <img src={moka} />
                  <span>Kawiarka</span>
                </a>
                <a
                  href="#aero"
                  onClick={e => this.smoothScroll(e)}
                  className="brew-methods-item"
                >
                  <img src={aero} />
                  <span>Aeropress</span>
                </a>
                <a
                  href="#chemex"
                  onClick={e => this.smoothScroll(e)}
                  className="brew-methods-item"
                >
                  <img src={chemex} />
                  <span>Chemex</span>
                </a>
              </div>
              <div className="brew-header">ogólne wskazówki</div>
              <div className="brew-basic">
                <ul>
                  <li>
                    Odmierz 26g świeżo palonej Kawerki (jeżeli zamówiłeś Kawerkę
                    w ziarnach – zmiel ją w stopniu średnim, lub grubym).
                    Pamiętaj, że lość zmielonej kawy możesz dostosować do
                    osobistych preferencji smakowych.
                  </li>
                  <li>
                    Smak kawy jest czymś bardzo subiektywnym - szczególnie jeśli
                    chodzi o moc przyrządzonego przez nas kubka kawy. Jeżeli
                    lubisz mocną kawę, dodaj większą ilość zmielonej kawy
                    zachowując tą samą ilość wody. Jeżeli lubisz łagodną kawę,
                    zmniejsz ilość zmielonej kawy albo zwiększ ilość wody.
                  </li>
                  <li>
                    Jeżeli chcesz eksperymentować z parzeniem kawy, polecamy,
                    aby zmieniać tylko jedną zmienną podczas tego procesu.
                    Zmiana grubości zmielenia, ilości kawy, ilości wody
                    diametralnie wpłynie na smak zaparzonej kawy. Zacznij od
                    jednej zmiennej, aby zrozumieć różnicę miedzy Twoim
                    przepisem, a tym co polecamy.
                  </li>
                  <li>
                    Nawiązując do długości parzenia kawy - jeżeli masz w planie
                    dużo przekroczyć czas parzenia, porównując do tego co
                    proponujemy, zastanów się nad grubością zmielenia kawy.
                    Jeżeli chcesz szybciej zaparzyć kawę, mocniej zmiel kawę.
                    Nasz wspólny cel to idealnie wyparzona kawa, więc próbuj
                    różnych kombinacji i znajdź swój idealny smak!
                  </li>
                </ul>
              </div>
              <div className="brew-item">
                <div id="french" className="brew-item-left">
                  <img src={french} />
                  <div className="brew-item-left-recipe">
                    <ul>
                      <li className="brew-show">
                        <span>French Press Brew Guide</span> 500ml{" "}
                      </li>
                      <li>
                        <span>Ilość:</span> 2 kubki
                      </li>
                      <li>
                        <span>Zmielenie:</span> średnie lub grube
                      </li>
                      <li>
                        <span>Proporcje:</span> 1:15
                      </li>
                      <li>
                        <span>Czas parzenia:</span> 8 minuty lub mniej
                      </li>
                    </ul>
      <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  </div>
                  <ul>
                    <span> Wymagane przedmioty:</span>
                    <li>French Press</li>
                    <li>
                      <a href="/sklep"> 26g świeżo palonej Kawerki </a>
                    </li>
                    <li>Młynek, bądź zmielona Kawerka</li>
                    <li>Waga</li>
                    <li>Czajnik</li>
                    <li>Łyżeczka</li>
                  </ul>
                </div>
                <div className="brew-item-right">
                  <div className="brew-item-right-header brew-hide">
                    French Press Brew Guide
                    <span> 500ml</span>
                  </div>
    <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  <div className="brew-item-right-method">
                    <ul>
                      <span>Instrukcja:</span>
                      <li>
                        Odmierz 26g świeżo palonej Kawerki (jeżeli zamówiłeś
                        Kawerkę w ziarnach – zmiel ją w stopniu średnim, lub
                        grubym). Pamiętaj, że lość zmielonej kawy możesz
                        dostosować do osobistych preferencji smakowych.
                      </li>
                      <li>
                        Postaw swój French Press na elektronicznej wadze. Dodaj
                        świeżo zmieloną Kawerkę do French Pressu, wyzeruj wagę i
                        przygotuj stoper.
                      </li>
                      <li>
                        Przygotuj wodę o temperaturze 90 – 93 st. Celsjusza.
                        Rozpocznij odmierzanie czasu i wlej 390g wody. French
                        Press wypełni się pianą, która się wytworzy poprzez gaz
                        uwalniany ze świeżo palonej kawy. Wszystko jest ok!
                      </li>
                      <li>
                        Pozwól kawie postać przez ok. 4 minuty. Po upływie 4
                        minut wymieszaj kawę łyżką, by fusy kawy mogły opaść na
                        dno French Pressu. Jeżeli wytworzona piana Ci
                        przeszkadza, możesz wziąć łyżkę i ją wybrać. To sprawi,
                        że Twoja kawa będzie bardziej klarowna.
                      </li>
                      <li>
                        Po zamieszaniu kawy, odstaw ją na kolejne 3 minuty - w
                        tym czasie fusy opadną na dno zbiornika.
                      </li>
                      <li>
                        Wstaw górną część French Pressu do zbiornika z kawą i
                        delikatnie naciskaj. Naciskaj do momentu, aż sitko
                        znajdzie się na dnie zbiornika. Pozwól kawie jeszcze
                        trochę się ochłodzić, a Ty w tym czasie posprzątaj,
                        usiądź i rozkoszuj się smakiem przepysznej Kawerki!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="brew-item">
                <div id="moka" className="brew-item-left">
                  <img src={moka} />
                  <div className="brew-item-left-recipe">
                    <ul>
                      <li className="brew-show">
                        <span>Kawiarka (Moka Pot) Brew Guide</span>{" "}
                      </li>

                      <li>
                        <span>Ilość:</span> 4 filiżanki
                      </li>
                      <li>
                        <span>Zmielenie:</span> średnie
                      </li>
                      <li>
                        <span>Proporcje:</span> 1:15
                      </li>
                      <li>
                        <span>Czas parzenia:</span> 2 minuty, lub mniej
                      </li>
                    </ul>
      <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  </div>
                  <ul>
                    <span> Wymagane przedmioty:</span>
                    <li>Kawiarka (Moka Pot)</li>
                    <li>
                      <a href="/sklep"> 15g świeżo palonej Kawerki </a>
                    </li>
                    <li>Młynek lub zmielona Kawerka</li>
                    <li>Waga</li>
                    <li>Czajnik</li>
                    <li>Kubek do kawy</li>
                  </ul>
                </div>
                <div className="brew-item-right">
                  <div className="brew-item-right-header brew-hide">
                    Kawiarka (Moka Pot) Brew Guide
                  </div>
    <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  <div className="brew-item-right-method">
                    <ul>
                      <span>Instrukcja:</span>
                      <li>
                        Zważ 15g świeżo palonej Kawerki (jeśli kupiłeś Kawerkę w
                        ziarnach, zmiel ją w średnim bądź grubym stopniu). 15g
                        powinno wypełnić koszyczek znajdujący się w kawiarce.
                      </li>
                      <li>
                        Zagotuj wodę i odstaw czajnik z palnika - pozwoli to
                        uniknąć metalicznego smaku i zapobiegnie zagotowaniu się
                        kawy.
                      </li>
                      <li>
                        Wlej wodę do dolnej części kawiarki do linii znajdującej
                        się w środku naczynia.
                      </li>
                      <li>Włóż koszyczek z kawą do dolnej części kawiarki.</li>
                      <li>
                        Wsyp 15g kawy do koszyczka i wyrównaj poziom kawy
                        palcem. Usuń ziarna które znajdują się na krawędzi
                        kawiarki.
                      </li>
                      <li>
                        Zakręć kawiarkę, ale nie za mocno. W tym celu najlepiej
                        użyj ręcznika kuchennego, by przytrzymać dolną cześć
                        kawiarki w której znajduje się gorąca woda.
                      </li>
                      <li>
                        Postaw kawiarkę na ogniu. Użyj średniej wielkości
                        płomienia (jeżeli posiadasz kuchenkę indukcyjną, ustaw
                        ją na średnią moc).
                      </li>
                      <li>
                        Kiedy kawa zacznie się przedostawać do górnej części
                        kawiarki usłyszysz charakterystyczny odgłos „fukania”.
                        Kiedy podniesiesz klapę kawiarki zobaczysz ciemno
                        brązowy strumień kawy. Kiedy strumień kawy zmieni kolor
                        na jasno brązowy, zamknij klapę i odstaw kawiarkę ze
                        źródła ciepła.
                      </li>
                      <li>
                        Oblej dolną część kawiarki zimną wodą aby zakończyć
                        ekstrakcje kawy w kawiarce. Zapobiegnie to również
                        metalicznemu smakowi kawy.
                      </li>
                      <li>
                        Jak tylko kawa przestanie bulgoczeć, nalej ją do kubków
                        i rozkoszuj się smakiem Kawerki.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="brew-item">
                <div id="aero" className="brew-item-left">
                  <img src={aero} />
                  <div className="brew-item-left-recipe">
                    <ul>
                      <li className="brew-show">
                        <span>Aeropress Brew Guide</span>{" "}
                      </li>

                      <li>
                        <span>Ilość:</span> 1 kubek
                      </li>
                      <li>
                        <span>Zmielenie:</span> średnie
                      </li>
                      <li>
                        <span>Proporcje:</span> 1:15
                      </li>
                      <li>
                        <span>Czas parzenia:</span> 2 minuty lub mniej
                      </li>
                    </ul>
      <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  </div>
                  <ul>
                    <span> Wymagane przedmioty:</span>
                    <li>Aeropress</li>
                    <li>Papierowy Filtr</li>
                    <li>
                      <a href="/sklep"> 16g świeżo palonej Kawerki </a>
                    </li>
                    <li>Młynek, bądź zmielona Kawerka</li>
                    <li>Waga</li>
                    <li>Czajnik</li>
                    <li>Łyżeczka</li>
                    <li>Kubek do kawy</li>
                  </ul>
                </div>
                <div className="brew-item-right">
                  <div className="brew-item-right-header brew-hide">
                    Aeropress Brew Guide
                  </div>
    <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  <div className="brew-item-right-method">
                    <ul>
                      <span>Instrukcja:</span>
                      <li>
                        Włóż filtr do sitka i przepłucz go gorącą, przegotowaną
                        wodą.
                      </li>
                      <li>
                        Załóż sitko do głównej komory aeropressu i postaw go na
                        kubku w którym chcesz zaparzyć kawę. Najlepiej, żeby
                        Twój kubek i aeropress stał na elektronicznej wadze w
                        celu dokładnego odmierzenia ilości wody do parzenia.
                      </li>
                      <li>
                        Zważ 16g świeżo zmielonej Kawerki (jeżeli masz całe
                        ziarna Kawerki – zmiel ją bezpośrednio przed samym
                        dodaniem). Wsyp odmierzoną Kawerkę do głównej komory
                        aeropressu. Pamiętaj, że ilość kawy możesz zmienić w
                        zależności od intensywności Kawerki i preferencji smaku.
                      </li>
                      <li>
                        Zresetuj wagę i przygotuj stoper. Naciśnij start i nalej
                        240g wody do głównego zbiornika. Woda powinna mieć 90 –
                        93 stopnie Celsjusza i nalanie powinno Ci zająć ok. 20
                        sekund.
                      </li>
                      <li>
                        Od razu po wlaniu wody, zacznij ją mieszać łyżką w celu
                        nasycenia wody zmieloną kawą. Odstaw ją na ok. 1 minutę.
                      </li>
                      <li>
                        Po minucie, odłóż kubek z aeropressem na stół.
                        Delikatnie włóż tłok z gumą na końcu do głównej komory
                        aeropressu. Upewnij się że zrobiłeś to prawidłowo.
                      </li>
                      <li>
                        Kiedy tłok jest już na miejscu, zacznij naciskać stałą
                        siłą i tempem. Nie powinno to zająć dłużej niż 20
                        sekund.
                      </li>
                      <li>
                        Usuń sitko i wyjmij tłok z aeropressu. Pozwól kawie się
                        trochę ochłodzić, a Ty w tym czasie posprzątaj, usiądź i
                        rozkoszuj się przepysznym smakiem Kawerki!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="brew-item">
                <div id="chemex" className="brew-item-left">
                  <img src={chemex} />
                  <div className="brew-item-left-recipe">
                    <ul>
                      <li className="brew-show">
                        <span>Chemex Brew Guide</span>{" "}
                      </li>

                      <li>
                        <span>Ilość:</span> 4 - 6 filiżanek
                      </li>
                      <li>
                        <span>Zmielenie:</span> średnie lub grube
                      </li>
                      <li>
                        <span>Proporcje:</span> 1:15
                      </li>
                      <li>
                        <span>Czas parzenia:</span> 6 minut, lub mniej
                      </li>
                    </ul>
      <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  </div>
                  <ul>
                    <span> Wymagane przedmioty:</span>
                    <li>Chemex (6 filiżanek)</li>
                    <li>Papierowy Filtr</li>
                    <li>
                      <a href="/sklep"> 45g świeżo palonej Kawerki </a>
                    </li>
                    <li>Młynek lub zmielona Kawerka</li>
                    <li>Waga</li>
                    <li>Czajnik</li>
                  </ul>
                </div>
                <div className="brew-item-right">
                  <div className="brew-item-right-header brew-hide">
                    Chemex Brew Guide{" "}
                  </div>
    <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                  <div className="brew-item-right-method">
                    <ul>
                      <span>Instrukcja:</span>
                      <li>
                        Zważ 45g świeżo palonej Kawerki (jeśli kupiłeś Kawerkę w
                        ziarnach, zmiel ją w średnim bądź grubym stopniu).
                        Pamiętaj, że ilość zmielonej kawy możesz dostosować do
                        osobistych preferencji smakowych.
                      </li>
                      <li>
                        Postaw Chemex na wadze elektronicznej i włóż filtr.
                        Przepłucz filtr gorącą wodą - dzięki temu unikniesz
                        „papierowego smaku” i od razu podgrzejesz naczynie przed
                        zaparzeniem w nim kawy.
                      </li>
                      <li>
                        Wylej wodę, która znajduje się w naczyniu i wsyp 45g
                        przygotowanej wcześniej zmielonej kawy. Zresetuj wagę i
                        przygotuj stoper.
                      </li>
                      <li>
                        Przygotuj wodę o temperaturze ok. 90 – 93 stopni
                        Celsjusza. Włącz stoper i zacznij nalewać wodę do
                        Chemexu. Kiedy wlejesz 75g- 100g wody zatrzymaj się i
                        pozwól kawie przyjąć wodę i uwolnić gaz. Staraj się
                        nalewać wodę okrężnymi ruchami - pozwoli to na
                        jednomierne zaparzenie znajdującej się w naczyniu kawy.
                      </li>
                      <li>
                        W momencie, gdy kawa już się nie pieni, zacznij ponowne
                        nalewanie wody - tym razem wlej jej 200g. Pozwól kawie
                        przejść przez filtr - odstaw ją na ok. 2 minuty.
                      </li>
                      <li>
                        Nalej kolejne 200g wody do Chemexu i odstaw na ok. 3 i
                        pół minuty. Łącznie wlałeś już ok. 500g wody.
                      </li>
                      <li>
                        Wlej kolejne 175g wody i ponownie odstaw naczynie na 5
                        minut. Łącznie już wlałeś ok. 675g wody.
                      </li>
                      <li>
                        Pozwól kawie się trochę ochłodzić, a Ty w tym czasie
                        posprzątaj, usiądź i rozkoszuj się smakiem Kawerki.
                      </li>
                    </ul>
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
      GetCollections,
      fetchHomepage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BrewGuides);
