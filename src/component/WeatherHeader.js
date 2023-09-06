import React, { useState, useEffect } from "react";
import axios from "axios";
import defaultIcon from '../icons/clear-sky.png'
import clearSky from '../icons/clear-sky.png';
import clearSkyNight from '../icons/clear-sky-night.png';
import fewClouds from '../icons/few-clouds.png';
import fewCloudsNight from '../icons/few-clouds-night.png';
import clouds from '../icons/clouds.png';
import rain from '../icons/rain.png';
import person from '../icons/person.png';

import '../css/weatherHeader.css'

const weatherIcons = {
  '01d': clearSky,
  '01n': clearSkyNight,
  '02d': fewClouds,
  '02n': fewCloudsNight,
  '03d': fewClouds, //mostlyClouds
  '03n': fewCloudsNight, //mostlyCloudsNight
  '04d': clouds,
  '04n': clouds,
  '09d': rain,
  '09n': rain,
  '10d': rain, // 가벼운 비와 비의 아이콘이 같은 경우
  '10n': rain, // 가벼운 비와 비의 아이콘이 같은 경우
};

function WeatherHeader(props) {
  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const city = "Daejeon";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then((response) => {
        setTempMin(Math.round(response.data.main.temp_min - 3));
        setTempMax(Math.round(response.data.main.temp_max + 3));
        setCurrentTemp(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
        const weatherIconCode = response.data.weather[0].icon;
        setIcon(weatherIcons[weatherIconCode] || defaultIcon);

      })
      .catch((error) => console.error("에러 발생:", error));
  }, []);
  const { isOn } = props;
  return (
    <header style={
      {
        fontFamily:'IBM Plex Sans KR'
      }
    }>
      <div className="headerWeather">
        <div className="city">
          <h6>대전광역시</h6>
          <img src={icon} alt="날씨 아이콘" style={{width:'24px', height:'24px'}}/>
          <p>{`${currentTemp}°C`}</p>
        </div>
        <div className="temperaturePlus">
          <span style={{marginLeft:'3.5rem'}}>{`최고: ${tempMax}°C`}</span>
          <span style={{marginLeft:'0.8rem'}}>{`최저: ${tempMin}°C`}</span>
        </div>
      </div>
      <div className="headerUser">
        <div className="headerPerson">
          <img src={person} alt="Person Icon" />
        </div>
        <div className="headerHamburger" onClick={isOn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default WeatherHeader;
