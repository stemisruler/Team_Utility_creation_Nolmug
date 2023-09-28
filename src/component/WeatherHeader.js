import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../thunks/weatherThunks';
import { setCurrentTemp, setWeatherName } from "../actions/weatherActions";
import person from '../icons/person.png';

import '../css/weatherHeader.css'

function WeatherHeader(props) {
  const dispatch = useDispatch();

  const { currentTemp, tempMin, tempMax, icon } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("Daejeon"));

    const handleKeyDown = (e) => {
      if (e.key === 'q') {
        dispatch(setCurrentTemp(35));
      }
      if (e.key === 'w') {
        dispatch(setWeatherName('비'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [dispatch]);

  const { isOn } = props;
  return (
    <header style={
      {
        fontFamily: 'IBM Plex Sans KR'
      }
    }>
      <div className="headerWeather">
        <div className="city">
          <h6>대전광역시</h6>
          <img src={icon} alt="날씨 아이콘" style={{ width: '24px', height: '24px' }} />
          <p>{`${currentTemp}°C`}</p>
        </div>
        <div className="temperaturePlus">
          <span style={{ marginLeft: '3.5rem' }}>{`최고: ${tempMax}°C`}</span>
          <span style={{ marginLeft: '0.8rem' }}>{`최저: ${tempMin}°C`}</span>
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
