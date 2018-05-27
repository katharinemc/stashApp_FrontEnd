import { API_BASE_URL } from '../config'
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const CHANGE_LANDING = 'CHANGE_LANDING';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_FOOTER_EXPAND = 'SET_FOOTER_EXPAND'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});


export const changeLanding = (displayType) => ({
  type: CHANGE_LANDING,
  displayType    
});

export const submitRegistration = (newUserObj) => ({
  type: SUBMIT_REGISTRATION,    
  newUserObj
});

export const submitLogin = (loginObj) => ({
  type: SUBMIT_LOGIN,
  loginObj
});

export const setLoginStatus = (loginStatus) => ({
  type: SET_LOGIN_STATUS,
  loginStatus
});

export const setFooterExpand = (expandStatus) => ({
  type: SET_FOOTER_EXPAND,
  expandStatus
});

export const fetchProductsSuccess = (products) => ({
  type:FETCH_PRODUCTS_SUCCESS,
  products
})


export const fetchProducts = () => dispatch => {
  fetch(`${API_BASE_URL}/api/products/`, {
      method: 'get'
  })
  .then(res => {
      if (!res.ok){
          return Promise.reject(res.statusText)
      }
      console.log('i am a res', res.json)
      return res.json();
  }) 

  .then (products => dispatch(fetchProductsSuccess(products)))
  // .catch(err => fetchCheeseError(err));
};

const storeAuthInfo = (authToken, dispatch) => {
  console.log('store some info!')
  const decodedToken = jwtDecode(authToken);
  console.log('here is a decoded token', decodedToken)
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const login_sequence = (values) => dispatch => {
  new Promise((resolve, reject) => {
  fetch (`http://localhost:8080/api/login/`, {
    method: 'post',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    } })
    .then(res => res.json())
    .then ( ({authToken}) => storeAuthInfo(authToken, dispatch))
      
  })}
