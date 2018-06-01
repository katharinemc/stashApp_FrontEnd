import {API_BASE_URL} from '../config'
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken, saveCurrentUser, clearCurrentUser} from '../local-storage';
import {fetchProductsRequest} from './landingActions'


export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const LOG_OUT_STORE = 'LOG_OUT_STORE';
export const  CAUGHT_ERROR = 'CAUGHT_ERROR';

export const setAuthToken = authToken => ({type: SET_AUTH_TOKEN, authToken});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const caughtError = (error) => ({type: CAUGHT_ERROR, error})
 
export const authSuccess = currentUser => ({type: AUTH_SUCCESS, currentUser});

export const submitRegistration = (newUserObj) => ({type: SUBMIT_REGISTRATION, newUserObj});

export const submitLogin = (loginObj) => ({type: SUBMIT_LOGIN, loginObj});

export const setLoginStatus = (loginStatus) => ({type: SET_LOGIN_STATUS, loginStatus});

export const logOutStore = () => ({type: LOG_OUT_STORE})

const storeAuthInfo = (authToken, dispatch, username) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user.username));
  saveAuthToken(authToken);
  };

export const login_sequence = (values) => async dispatch => {
const {username} = values;
const res = await fetch(`http://localhost:8080/api/login/`, {
      method: 'post',
      body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      })
const data = await res.json()
if (res.status===200){
  console.log(data, res)
  const {authToken} = data
  const storeAuth = await storeAuthInfo(authToken, dispatch, username )
  authSuccess(username)
  dispatch(fetchProductsRequest('true'))
} else {
  dispatch(caughtError(data.message))
} }

export const registerSequence = (values) => async dispatch => {
  const {username, password, userEmail} = values

  const res = await fetch(`http://localhost:8080/api/users/`, {
      method: 'post',
      body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
  const data = await res.json()
  if(res.status === 422){
    dispatch(caughtError(data.message))
  } else {
    const {authToken} = data
    const storeAuth = await storeAuthInfo(authToken, dispatch, username)
  }
}

export const logOutSequence = () => (dispatch) => {
  localStorage.clear()
  dispatch(logOutStore());
}