import { SET_USER_LOCATION } from '../actions/userTypes';

const initialState = {
  location: 'seogu', // 기본 위치
};

export default function userLocationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
}
