import { SET_USER_LOCATION } from './userTypes';

export const setUserLocation = (location) => ({
  type: SET_USER_LOCATION,
  payload: location,
});
