import {API_BASE_URL} from '../config'
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken, saveCurrentUser} from '../local-storage';
import {fetchProductsRequest} from './landingActions'


export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

export const setAuthToken = authToken => ({type: SET_AUTH_TOKEN, authToken});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({type: AUTH_SUCCESS, currentUser});

export const submitRegistration = (newUserObj) => ({type: SUBMIT_REGISTRATION, newUserObj});

export const submitLogin = (loginObj) => ({type: SUBMIT_LOGIN, loginObj});

export const setLoginStatus = (loginStatus) => ({type: SET_LOGIN_STATUS, loginStatus});

const storeAuthInfo = (authToken, dispatch, username) => {
  console.log('sAI user', username)

  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
  saveCurrentUser(username)
};

export const login_sequence = (values) => dispatch => {
const {username} = values;
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/api/login/`, {
      method: 'post',
      body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(({authToken}) => storeAuthInfo(authToken, dispatch, username))
      .then((username) => authSuccess(username))
      .then(() => {

        dispatch(fetchProductsRequest('true'))
      })
  })
}
