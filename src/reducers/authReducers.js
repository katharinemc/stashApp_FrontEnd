import {
  SET_AUTH_TOKEN,
  AUTH_SUCCESS,
  SUBMIT_LOGIN,
  SET_LOGIN_STATUS,
  SUBMIT_REGISTRATION,
  LOGIN_USER,
  CLEAR_AUTH,
  LOG_OUT_STORE
} from '../actions/auth'

const initialState = {
  login: false,
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT_STORE:
      return Object.assign({}, state, { authToken: null, currentUser: null});
    case SUBMIT_REGISTRATION:
      return 'foobar'
    case SUBMIT_LOGIN:
      return 'barfoo';
    case SET_LOGIN_STATUS:
      return Object.assign({}, state, {login: action.loginStatus})
    case SET_AUTH_TOKEN:
      return Object.assign({}, state, {authToken: action.authToken})
    case AUTH_SUCCESS:
      return Object.assign({}, state, {currentUser: action.currentUser})
  }

  return state;
}