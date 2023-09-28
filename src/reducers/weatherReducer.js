import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, SET_CURRENT_TEMP, SET_WEATHER_NAME } from "../actions/weatherActions";

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

      // 테스트를 위해 따로 만든 temp, weather name 바꾸는 리듀서 case
      case SET_CURRENT_TEMP:
        return {
          ...state,
          currentTemp: action.payload,
        };
      case SET_WEATHER_NAME:
        return {
          ...state,
          weatherName: action.payload,
        };
       
    default:
      return state;
  }
};

export default weatherReducer;
