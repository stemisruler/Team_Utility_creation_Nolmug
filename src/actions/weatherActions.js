export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const SET_CURRENT_TEMP = 'SET_CURRENT_TEMP';
export const SET_WEATHER_NAME = 'SET_WEATHER_NAME';

export const fetchWeatherSuccess = (weatherData) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weatherData,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

// 아래 두 코드는 온도와 날씨 이름을 강제로 바꾸는 것으로, 테스트 용이다.

export const setCurrentTemp = (temp) => {
  return {
    type: SET_CURRENT_TEMP,
    payload: temp,
  };
};

export const setWeatherName = (name) => {
  return {
    type: SET_WEATHER_NAME,
    payload: name,
  };
};
