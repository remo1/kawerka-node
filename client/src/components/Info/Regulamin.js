import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Menu from "../global/Menu";
import Loading from "../global/Loading";

import { GetProducts } from "../../ducks/products";
import { GetCategories } from "../../ducks/categories";
import { GetCollections } from "../../ducks/collections";
import Footer from "../global/Footer";

require('./Regulamin.scss')

class Regulamin extends Component {
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
                  <div className="header-text">
                    regulamin
                  </div>
                  <div className="copy">
      <div className="arrow">
                    <div className="arrow-left" />
                    <div className="arrow-right" />
                  </div>                    <p className="no-margin">§ 1
                    <p className="no-margin">Postanowienia wstępne</p>
                    <p>
                      <ul className="reg">
                        <li>
                          Sklep internetowy Kawerka Coffee Company, dostępny pod adresem internetowym
                          www.kawerka.pl prowadzony jest przez Remigiusza Oleszczuka prowadzącego
                          działalność gospodarczą pod firmą Kawerka Remigiusz Oleszczuk, wpisaną do
                          Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG)
                          prowadzonej przez ministra właściwego ds. gospodarki, NIP 5372572675, REGON
                          061428472.
                        </li>
                        <li>
                          Niniejszy Regulamin skierowany jest zarówno do Konsumentów, jak i do
                          Przedsiębiorców korzystających ze Sklepu i określa zasady korzystania ze Sklepu
                          internetowego oraz zasady i tryb zawierania Umów Sprzedaży z Klientem na
                          odległość za pośrednictwem Sklepu.
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 2
                    <p className="no-margin">Definicje</p>
                    <p>
                      <ul className="reg">
                        <li>
                          Konsument - osoba fizyczna zawierająca ze Sprzedawcą umowę w ramach Sklepu,
                          której przedmiot nie jest związany bezpośrednio z jej działalnością gospodarczą
                          lub zawodową.
                        </li>
                        <li>
                          Sprzedawca - osoba fizyczna prowadząca działalność gospodarczą pod firmą Kawerka
                          Remigiusz Oleszczuk wpisaną do Centralnej Ewidencji i Informacji o Działalności
                          Gospodarczej (CEIDG) prowadzonej przez ministra właściwego ds. gospodarki, NIP
                          5372572675, REGON 061428472.
                        </li>
                        <li>
                          Klient - każdy podmiot dokonujący zakupów za pośrednictwem Sklepu.
                        </li>
                        <li>
                          Przedsiębiorca - osoba fizyczna, osoba prawna i jednostka organizacyjna
                          niebędąca osobą prawną, której odrębna ustawa przyznaje zdolność prawną,
                          wykonująca we własnym imieniu działalność gospodarczą, która korzysta ze Sklepu.
                        </li>
                        <li>
                          Sklep - sklep internetowy prowadzony przez Sprzedawcę pod adresem internetowym
                          www.kawerka.pl.
                        </li>
                        <li>
                          Umowa zawarta na odległość - umowa zawarta z Klientem w ramach zorganizowanego
                          systemu zawierania umów na odległość (w ramach Sklepu), bez jednoczesnej
                          fizycznej obecności stron, z wyłącznym wykorzystaniem jednego lub większej
                          liczby środków porozumiewania się na odległość do chwili zawarcia umowy
                          włącznie.
                        </li>
                        <li>
                          Regulamin - niniejszy regulamin Sklepu.
                        </li>
                        <li>
                          Zamówienie - oświadczenie woli Klienta składane za pomocą Formularza Zamówienia
                          i zmierzające bezpośrednio do zawarcia Umowy Sprzedaży Produktu lub Produktów ze
                          Sprzedawcą.
                        </li>
                        <li>
                          Formularz zamówienia - interaktywny formularz dostępny w Sklepie umożliwiający
                          złożenie Zamówienia, w szczególności poprzez dodanie Produktów do Koszyka oraz
                          określenie warunków Umowy Sprzedaży, w tym sposobu dostawy i płatności.
                        </li>
                        <li>
                          Koszyk – element oprogramowania Sklepu, w którym widoczne są wybrane przez
                          Klienta Produkty do zakupu, a także istnieje możliwość ustalenia i modyfikacji
                          danych Zamówienia, w szczególności ilości produktów.
                        </li>
                        <li>
                          Produkt - dostępna w Sklepie rzecz ruchoma, będąca przedmiotem Umowy Sprzedaży
                          między Klientem a Sprzedawcą.
                        </li>
                        <li>
                          Umowa Sprzedaży - umowa sprzedaży Produktu zawierana albo zawarta między
                          Klientem a Sprzedawcą za pośrednictwem Sklepu internetowego.
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 3
                    <p className="no-margin">Kontakt ze Sklepem</p>
                    <p>
                      <ul className="reg">
                        <li>
                          Adres Sprzedawcy: Obrońców Tobruku 36/41, 01-494, Warszawa.
                        </li>
                        <li>
                          Adres e-mail Sprzedawcy: kontakt@kawerka.pl.
                        </li>
                        <li>
                          Numer telefonu Sprzedawcy: (+48) 730 070 539.
                        </li>
                        <li>
                          Numer rachunku bankowego Sprzedawcy 82 1870 1045 2078 1039 3422 0001.
                        </li>
                        <li>Klient może porozumiewać się ze Sprzedawcą za pomocą adresów i numerów
                          telefonów podanych w niniejszym paragrafie.
                        </li>
                        <li>
                          Klient może porozumieć się telefonicznie ze Sprzedawcą w dniach roboczych, w
                          godzinach 9:00 – 17:00.
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 4
                    <p className="no-margin">Wymagania techniczne</p>
                    <p>
                      <ul className="reg">
                        <li>
                          Do korzystania ze Sklepu, w tym przeglądania asortymentu Sklepu oraz składania
                          zamówień na Produkty, niezbędne są:
                          <ul>
                            <li>
                              urządzenie końcowe z dostępem do sieci Internet i przeglądarką internetową typu
                              Chrome, Firefox, Opera, Safari,
                            </li>
                            <li>
                              aktywne konto poczty elektronicznej (e-mail),
                            </li>
                            <li>
                              włączona obsługa plików cookies.
                            </li>

                          </ul>
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 5
                    <p className="no-margin">Informacje ogólne
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Sprzedawca w najszerszym dopuszczalnym przez prawo zakresie nie ponosi
                          odpowiedzialności za zakłócenia w tym przerwy w funkcjonowaniu Sklepu
                          spowodowane siłą wyższą, niedozwolonym działaniem osób trzecich lub
                          niekompatybilnością Sklepu internetowego z infrastrukturą techniczną Klienta.
                        </li>
                        <li>
                          Przeglądanie asortymentu Sklepu nie wymaga zakładania Konta. Składanie zamówień
                          przez Klienta na Produkty znajdujące się w asortymencie Sklepu możliwe jest
                          przez podanie niezbędnych danych osobowych i adresowych umożliwiających
                          realizację Zamówienia.
                        </li>
                        <li>
                          Ceny podane w Sklepie są podane w polskich złotych i są cenami brutto
                          (uwzględniają podatek VAT).
                        </li>
                        <li>
                          Numer rachunku bankowego Sprzedawcy 82 1870 1045 2078 1039 3422 0001.
                        </li>
                        <li>
                          Na końcową (ostateczną) kwotę do zapłaty przez Klienta składa się cena za
                          Produkt oraz koszt dostawy (w tym opłaty za transport, dostarczenie i usługi
                          pocztowe), o której Klient jest informowany na stronach Sklepu w trakcie
                          składania Zamówienia, w tym także w chwili wyrażenia woli związania się Umową
                          Sprzedaży.
                        </li>

                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 6
                    <p className="no-margin">Zasady składania Zamówienia</p>
                    <p>
                      <ul className="reg">
                        <li>
                          W celu złożenia Zamówienia należy:
                          <ul>
                            <li>
                              wybrać Produkt będący przedmiotem Zamówienia, wybrać rodzaj zmielenia, następnie
                              wybrać wagę i kliknąć “Jednorazowy zakup”, powodując dodanie produktu do
                              koszyka;
                            </li>
                            <li>
                              skorzystać z możliwości złożenia Zamówienia bez rejestracji;
                            </li>
                            <li>
                              wypełnić Formularz zamówienia poprzez wpisanie danych odbiorcy Zamówienia oraz
                              adresu, na który ma nastąpić dostawa Produktu. Opcjonalnie można dostać fakturę
                              VAT po wysłaniu prośby na adres e-mail: kontakt@kawerka.pl;
                            </li>
                            <li>
                              kliknąć przycisk “Zamawiam i płacę” który przekieruje Kupującego na stronę PayU,
                              gdzie dokona płatności.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 7
                    <p className="no-margin">Oferowane metody dostawy oraz płatności
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Klient może skorzystać z następujących metod dostawy lub odbioru zamówionego
                          Produktu:
                          <ul>
                            <li>
                              przesyłka kurierska – DHL.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Klient może skorzystać z następujących metod płatności:
                          <ul>
                            <li>
                              płatności elektroniczne;
                            </li>
                            <li>
                              płatność kartą płatniczą.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Szczegółowe informacje na temat metod dostawy oraz akceptowalnych metod
                          płatności znajdują się na stronie Sklepu.
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 8
                    <p className="no-margin">Wykonanie umowy sprzedaży
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Zawarcie Umowy Sprzedaży między Klientem a Sprzedawcą następuje po uprzednim
                          złożeniu przez Klienta Zamówienia za pomocą Formularza zamówienia w Sklepie
                          internetowym zgodnie z § 6 Regulaminu.
                        </li>
                        <li>
                          Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego otrzymanie oraz
                          jednocześnie przyjmuje Zamówienie do realizacji. Potwierdzenie otrzymania
                          Zamówienia i jego przyjęcie do realizacji następuje poprzez przesłanie przez
                          Sprzedawcę Klientowi stosownej wiadomości e-mail na podany w trakcie składania
                          Zamówienia adres poczty elektronicznej Klienta, która zawiera co najmniej
                          oświadczenia Sprzedawcy o otrzymaniu Zamówienia i o jego przyjęciu do realizacji
                          oraz potwierdzenie zawarcia Umowy Sprzedaży. Z chwilą otrzymania przez Klienta
                          powyższej wiadomości e-mail zostaje zawarta Umowa Sprzedaży między Klientem a
                          Sprzedawcą.
                        </li>
                        <li>
                          Produkt zostanie wysłany przez Sprzedawcę w przeciągu 2 dni roboczych od
                          odebrania płatności za produkt na adres wskazany przy Zamówieniu.
                        </li>
                        <li>
                          Początek biegu terminu dostawy Produktu do Klienta liczy się w następujący
                          sposób:
                          <ul>
                            <li>
                              W przypadku wyboru przez Klienta sposobu płatności przelewem, płatności
                              elektroniczne lub kartą płatniczą - od dnia uznania rachunku bankowego
                              Sprzedawcy.
                            </li>
                          </ul>
                        </li>
                        <li>W przypadku wyboru przez Klienta sposobu płatności przelewem, płatności
                          elektroniczne lub kartą płatniczą - od dnia uznania rachunku bankowego
                          Sprzedawcy.
                        </li>

                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 9
                    <p className="no-margin">Prawo odstąpienia od umowy
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Konsument może w terminie 14 dni odstąpić od Umowy Sprzedaży bez podania
                          jakiejkolwiek przyczyny.
                        </li>
                        <li>
                          Bieg terminu określonego w ust. 1 rozpoczyna się od dostarczenia Produktu
                          Konsumentowi lub wskazanej przez niego osobie innej niż przewoźnik.
                        </li>
                        <li>
                          Konsument może odstąpić od Umowy, składając Sprzedawcy oświadczenie o
                          odstąpieniu od Umowy. Do zachowania terminu odstąpienia od Umowy wystarczy
                          wysłanie przez Konsumenta oświadczenia przed upływem tego terminu.
                        </li>
                        <li>
                          Oświadczenie może być wysłane za pomocą tradycyjnej poczty poprzez przesłanie
                          oświadczenia na adres Sprzedawcy - dane kontaktowe Sprzedawcy zostały określone
                          w § 3. W przypadku przesłania oświadczenia przez Konsumenta drogą elektroniczną,
                          Sprzedawca niezwłocznie prześle Konsumentowi na podany przez Konsumenta adres
                          e-mail potwierdzenie otrzymania oświadczenia o odstąpieniu od Umowy.
                        </li>
                        <li>Skutki odstąpienia od Umowy:
                          <ul>
                            <li>
                              W przypadku odstąpienia od Umowy zawartej na odległość Umowę uważa się za
                              niezawartą.
                            </li>
                            <li>
                              W przypadku odstąpienia od Umowy Sprzedawca zwraca Konsumentowi niezwłocznie,
                              nie później niż w terminie 14 dni od dnia otrzymania oświadczenia Konsumenta o
                              odstąpieniu od Umowy, wszystkie dokonane przez niego płatności, bez kosztów
                              przesyłki.
                            </li>
                            <li>
                              Zwrotu płatności Sprzedawca dokona przy użyciu takich samych metod płatności,
                              jakie zostały przez Konsumenta użyte w pierwotnej transakcji, chyba że Konsument
                              wyraźnie zgodził się na inne rozwiązanie, które nie będzie się wiązało dla niego
                              z żadnymi kosztami.
                            </li>
                            <li>
                              Sprzedawca może wstrzymać się ze zwrotem płatności do czasu otrzymania Produktu
                              z powrotem lub do czasu dostarczenia mu dowodu jego odesłania, w zależności od
                              tego, które zdarzenie nastąpi wcześniej.
                            </li>
                            <li>
                              Konsument powinien odesłać Produkt na adres Sprzedawcy podany w niniejszym
                              Regulaminie niezwłocznie, nie później niż 14 dni od dnia, w którym poinformował
                              Sprzedawcę o odstąpieniu od Umowy. Termin zostanie zachowany, jeśli Konsument
                              odeśle Produkt przed upływem terminu 14 dni.
                            </li>
                            <li>
                              Konsument powinien odesłać Produkt na adres Sprzedawcy podany w niniejszym
                              Regulaminie niezwłocznie, nie później niż 14 dni od dnia, w którym poinformował
                              Sprzedawcę o odstąpieniu od Umowy. Termin zostanie zachowany, jeśli Konsument
                              odeśle Produkt przed upływem terminu 14 dni.
                            </li>
                            <li>
                              Konsument odpowiada tylko za zmniejszenie wartości Produktu wynikające z
                              korzystania z niego w sposób inny niż było to konieczne do stwierdzenia
                              charakteru, cech i funkcjonowania Produktu.
                            </li>

                          </ul>
                        </li>
                        <li>
                          W przypadku gdy ze względu na charakter Produktu nie może on zostać odesłany w
                          zwykłym trybie pocztą, informacja o tym, a także o kosztach zwrotu Produktu,
                          będzie się znajdować w opisie Produktu w Sklepie.
                        </li>
                        <li>
                          Prawo do odstąpienia od umowy zawartej na odległość nie przysługuje Konsumentowi
                          w odniesieniu do Umowy:
                          <ul>
                            <li>
                              w której przedmiotem świadczenia jest rzecz nieprefabrykowana, wyprodukowana
                              według specyfikacji Konsumenta lub służąca zaspokojeniu jego
                              zindywidualizowanych potrzeb,
                            </li>
                            <li>
                              w której przedmiotem świadczenia jest rzecz dostarczana w zapieczętowanym
                              opakowaniu, której po otwarciu opakowania nie można zwrócić ze względu na
                              ochronę zdrowia lub ze względów higienicznych, jeżeli opakowanie zostało otwarte
                              po dostarczeniu,
                            </li>
                            <li>
                              w które przedmiotem świadczenia jest rzecz ulegająca szybkiemu zepsuciu lub
                              mająca krótki termin przydatności do użycia,
                            </li>
                            <li>
                              o świadczenie usług, jeżeli Sprzedawca wykonał w pełni usługę za wyraźną zgodą
                              Konsumenta, który został poinformowany przez rozpoczęciem świadczenia, że po
                              spełnieniu świadczenia przez Sprzedawcę utraci prawo odstąpienia od Umowy,
                            </li>
                            <li>
                              w którym cena lub wynagrodzenie zależy od wahań na rynku finansowym, nad którym
                              Sprzedawca nie sprawuje kontroli, i które mogą wystąpić przed upływem terminu do
                              odstąpienia od Umowy,
                            </li>
                            <li>
                              w której przedmiotem świadczenia są rzeczy, które po dostarczeniu, ze względu na
                              swój charakter, zostają nierozłącznie połączone z innymi rzeczami,
                            </li>
                            <li>
                              w której przedmiotem świadczenia są napoje alkoholowe, których cena została
                              uzgodniona przy zawarciu umowy sprzedaży, a których dostarczenie może nastąpić
                              dopiero po upływie 30 dni i których wartość zależy od wahań na rynku, nad
                              którymi Sprzedawca nie ma kontroli,
                            </li>
                            <li>
                              w której przedmiotem świadczenia są nagrania dźwiękowe lub wizualne albo
                              programy komputerowe dostarczane w zapieczętowanym opakowaniu, jeżeli opakowanie
                              zostało otwarte po dostarczeniu,
                            </li>
                            <li>
                              o dostarczanie dzienników, periodyków lub czasopism, z wyjątkiem umowy o
                              prenumeratę,
                            </li>
                            <li>
                              o dostarczenie treści cyfrowych, które nie są zapisane na nośniku materialnym,
                              jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą Konsumenta przed
                              upływem terminu do odstąpienia od umowy i po poinformowaniu go przez Sprzedawcę
                              o utracie prawa odstąpienia od Umowy,
                            </li>
                          </ul>

                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 10
                    <p className="no-margin">Reklamacja i gwarancja
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Umową Sprzedaży objęte są nowe Produkty.
                        </li>
                        <li>
                          Reklamację należy zgłosić pisemnie lub drogą elektroniczną na podane w
                          niniejszym Regulaminie adresy Sprzedawcy.
                        </li>
                        <li>
                          Sprzedawca ustosunkuje się do żądania reklamacyjnego niezwłocznie, nie później
                          niż w terminie 14 dni, a jeśli nie zrobi tego w tym terminie, uważa się, że
                          żądanie Klienta uznał za uzasadnione.
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 11
                    <p className="no-margin">Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Szczegółowe informacje dotyczące możliwości skorzystania przez Konsumenta z
                          pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń oraz
                          zasady dostępu do tych procedur dostępne są w siedzibach oraz na stronach
                          internetowych powiatowych (miejskich) rzeczników konsumentów, organizacji
                          społecznych, do których zadań statutowych należy ochrona konsumentów,
                          Wojewódzkich Inspektoratów Inspekcji Handlowej oraz pod następującymi adresami
                          internetowymi Urzędu Ochrony Konkurencji i Konsumentów:
                          <ul className="small"> 
                            <li>
                              http://www.uokik.gov.pl/spory_konsumenckie.php;
                            </li>
                            <li>
                              http://www.uokik.gov.pl/sprawy_indywidualne.php
                            </li>
                            <li>
                              http://www.uokik.gov.pl/wazne_adresy.php
                            </li>
                          </ul>
                        </li>
                        <li>
                          Reklamację należy zgłosić pisemnie lub drogą elektroniczną na podane w
                          niniejszym Regulaminie adresy Sprzedawcy.
                        </li>
                        <li>
                          Konsument posiada następujące przykładowe możliwości skorzystania z pozasądowych
                          sposobów rozpatrywania reklamacji i dochodzenia roszczeń:
                          <ul>
                            <li>
                              Konsument uprawniony jest do zwrócenia się do stałego polubownego sądu
                              konsumenckiego, o którym mowa w art. 37 ustawy z dnia 15 grudnia 2000 r. o
                              Inspekcji Handlowej (Dz.U. z 2014 r. poz. 148 z późn. zm.), z wnioskiem o
                              rozstrzygnięcie sporu wynikłego z Umowy zawartej ze Sprzedawcą.
                            </li>
                            <li>
                              Konsument uprawniony jest do zwrócenia się do wojewódzkiego inspektora Inspekcji
                              Handlowej, zgodnie z art. 36 ustawy z dnia 15 grudnia 2000 r. o Inspekcji
                              Handlowej (Dz.U. z 2014 r. poz. 148 z późn. zm.), z wnioskiem o wszczęcie
                              postępowania mediacyjnego w sprawie polubownego zakończenia sporu między
                              Konsumentem a Sprzedawcą.
                            </li>
                            <li>
                              Konsument może uzyskać bezpłatną pomoc w sprawie rozstrzygnięcia sporu między
                              nim a Sprzedawcą, korzystając także z bezpłatnej pomocy powiatowego (miejskiego)
                              rzecznika konsumentów lub organizacji społecznej, do której zadań statutowych
                              należy ochrona konsumentów (m.in. Federacja Konsumentów, Stowarzyszenie
                              Konsumentów Polskich).
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 12
                    <p className="no-margin">Dane osobowe w Sklepie internetowym
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Administratorem danych osobowych Klientów zbieranych za pośrednictwem Sklepu
                          internetowego jest Sprzedawca.
                        </li>
                        <li>
                          Dane osobowe Klientów zbierane przez administratora za pośrednictwem Sklepu
                          internetowego zbierane są w celu realizacji Umowy Sprzedaży.
                        </li>
                        <li>
                          Odbiorcami danych osobowych Klientów Sklepu internetowego mogą być:
                          <ul>
                            <li>
                              W przypadku Klienta, który korzysta w Sklepie internetowym ze sposobu dostawy
                              przesyłką kurierską, Administrator udostępnia zebrane dane osobowe Klienta
                              wybranemu przewoźnikowi lub pośrednikowi realizującemu przesyłki na zlecenie
                              Administratora.
                            </li>
                            <li>
                              W przypadku Klienta, który korzysta w Sklepie internetowym ze sposobu płatności
                              elektronicznych lub kartą płatniczą Administrator udostępnia zebrane dane
                              osobowe Klienta, wybranemu podmiotowi obsługującemu powyższe płatności w Sklepie
                              internetowym.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Klient ma prawo dostępu do treści swoich danych oraz ich poprawiania.
                        </li>
                        <li>
                          Podanie danych osobowych jest dobrowolne, aczkolwiek niepodanie wskazanych w
                          Regulaminie danych osobowych niezbędnych do zawarcia Umowy Sprzedaży skutkuje
                          brakiem możliwości zawarcia tejże umowy.
                        </li>
                        <li>
                          Klient może porozumieć się telefonicznie ze Sprzedawcą w dniach roboczych, w
                          godzinach 9:00 – 17:00.
                        </li>
                      </ul>
                    </p>
                  </p>

                  <p className="no-margin">§ 13
                    <p className="no-margin">Postanowienia końcowe
                    </p>
                    <p>
                      <ul className="reg">
                        <li>
                          Umowy zawierane poprzez Sklep internetowy zawierane są w języku polskim.
                        </li>
                        <li>
                          Sprzedawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych
                          przyczyn to jest: zmiany przepisów prawa, zmiany sposobów płatności i dostaw - w
                          zakresie, w jakim te zmiany wpływają na realizację postanowień niniejszego
                          Regulaminu. O każdej zmianie Sprzedawca poinformuje Klienta z co najmniej 7
                          dniowym wyprzedzeniem.
                        </li>
                        <li>
                          W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie
                          powszechnie obowiązujące przepisy prawa polskiego, w szczególności: Kodeksu
                          cywilnego; ustawy o świadczeniu usług drogą elektroniczną; ustawy o prawach
                          konsumenta, ustawy o ochronie danych osobowych.
                        </li>
                        <li>
                          Klient ma prawo skorzystać z pozasądowych sposobów rozpatrywania reklamacji i
                          dochodzenia roszczeń. W tym celu może złożyć skargę za pośrednictwem unijnej
                          platformy internetowej ODR dostępnej pod adresem:
                          http://ec.europa.eu/consumers/odr/.
                        </li>
                      </ul>
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Regulamin);
