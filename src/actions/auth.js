
import {saveAuthToken, saveCurrentUser} from '../local-storage';
import jwtDecode from 'jwt-decode';

export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const LOG_OUT_STORE = 'LOG_OUT_STORE';
export const  CAUGHT_ERROR = 'CAUGHT_ERROR';
export const NEW_USER ='NEW_USER'

export const setAuthToken = authToken => ({type: SET_AUTH_TOKEN, authToken});
export const newUser = (status) => ({type: NEW_USER, status})
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const caughtError = (error) => ({type: CAUGHT_ERROR, error})
 
export const authSuccess = currentUser => ({type: AUTH_SUCCESS, currentUser});

export const submitRegistration = (newUserObj) => ({type: SUBMIT_REGISTRATION, newUserObj});

export const submitLogin = (loginObj) => ({type: SUBMIT_LOGIN, loginObj});

export const logOutStore = () => ({type: LOG_OUT_STORE})

const storeAuthInfo = (authToken, dispatch, username) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user.username));
  saveAuthToken(authToken);
  saveCurrentUser(decodedToken.user.username)
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
    dispatch(authSuccess(username))

    const {authToken} = data
  const storeAuth = await storeAuthInfo(authToken, dispatch, username )
} else {
  dispatch(caughtError(data.message))
} }

export const registerSequence = (values) => async dispatch => {
  const {username} = values

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
    dispatch(authSuccess(username))
    dispatch(newUser(true))
    const {authToken} = data
    const storeAuth = await storeAuthInfo(authToken, dispatch, username)
  }
}

export const logOutSequence = () => (dispatch) => {
  localStorage.clear()
  dispatch(logOutStore());
}