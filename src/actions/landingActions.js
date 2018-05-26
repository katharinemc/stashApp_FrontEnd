import { API_BASE_URL } from '../config'

export const CHANGE_LANDING = 'CHANGE_LANDING';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_FOOTER_EXPAND = 'SET_FOOTER_EXPAND'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'


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
