import "./style.css";
import { useEffect, useState } from "react";

function Header() {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("İstanbul");

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=c574999a70aacbf982d6c8ef4db0cff6
      `
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        setLoading(false);
      });
  }, [value]);
  if (!weather) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden center">Loading...</span>
      </div>
    );
  }

  return (
    <main>
      {loading && (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden center">Loading...</span>
        </div>
      )}
      <div className="weather__container">
        <div id="units__toggle">
          <button id="celsius" className="active">
            C
          </button>
        </div>
        <div id="weather__icon"></div>
        <div className="box1">
          <div className="box__left">
            <div id="location__name">{value} </div>
            <div id="weather__condition">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Ppp"
              />
            </div>
          </div>
          <div className="box__right">
            <div id="current__temperature">
              {Math.round(weather.main.temp)}°
            </div>
          </div>
        </div>

        <div className="box2">
          <div id="minmax__temperature">{weather.sys.country}</div>
          <div id="humidity">{dateBuilder(new Date())}</div>
        </div>
      </div>

      <div className="search__input">
        <form id="city__form">
          <div className="form__group">
            <select
              className="form-select"
              aria-label="Default select example"
              name="Sehir"
              value={value}
              onChange={handleChange}
            >
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Amasya">Amasya</option>
              <option value="Antalya">Antalya</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bartın">Bartın</option>
              <option value="Batman">Batman</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Düzce">Düzce</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkâri">Hakkâri</option>
              <option value="Hatay">Hatay</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Isparta">Isparta</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Karabük">Karabük</option>
              <option value="Karaman">Karaman</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kilis">Kilis</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Mardin">Mardin</option>
              <option value="Mersin">Mersin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yalova">Yalova</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          <div id="error__text">Enter your city here</div>
        </form>
      </div>
    </main>
  );
}

export default Header;