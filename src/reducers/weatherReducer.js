import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from "../actions/weatherActions";

const initialState = {
  currentTemp: null,
  tempMin: null,
  tempMax: null,
  iconCode: null,
  icon: null,
  weatherName: null,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        currentTemp: action.payload.currentTemp,
        tempMin: action.payload.tempMin,
        tempMax: action.payload.tempMax,
        iconCode: action.payload.iconCode,
        icon: action.payload.icon,
        weatherName: action.payload.weatherName,
        error: null,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
