import axios from 'axios';
import { fetchWeatherSuccess, fetchWeatherFailure } from '../actions/weatherActions';
import { weatherIcons, weatherNamesInKorean, defaultIcon } from '../utils/weatherUtils';

export const fetchWeather = (city) => {
  return async (dispatch) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const city = "Daejeon";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const weatherIconCode = response.data.weather[0].icon;

      const weatherData = {
        currentTemp: Math.round(response.data.main.temp),
        tempMin: Math.round(response.data.main.temp_min - 3),
        tempMax: Math.round(response.data.main.temp_max + 3),
        icon: weatherIcons[weatherIconCode] || defaultIcon,
        weatherName: weatherNamesInKorean[weatherIconCode] || '정보 없음',
      };

      dispatch(fetchWeatherSuccess(weatherData));
    } catch (error) {
      dispatch(fetchWeatherFailure(error));
    }
  };
};
