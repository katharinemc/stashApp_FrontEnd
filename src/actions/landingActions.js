import {API_BASE_URL} from '../config'

export const FETCH_LOOKS_SUCCESS='FETCH_LOOKS_SUCCESS'
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
export const SET_FOOTER_EXPAND = 'SET_FOOTER_EXPAND'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_LOOKS_REQUEST='FETCH_LOOKS_REQUEST'

export const changeDisplay = (displayType) => ({
  type: CHANGE_DISPLAY,
  displayType    
});

export const setFooterExpand = (expandStatus) => ({
  type: SET_FOOTER_EXPAND,
  expandStatus
});

export const fetchProductsSuccess = (products) => ({
  type:FETCH_PRODUCTS_SUCCESS,
  products
})

export const fetchProductsRequest = (status) => ({
  type:FETCH_PRODUCTS_REQUEST,
  status
})

export const fetchLooksRequest = (status) => ({
  type: FETCH_LOOKS_REQUEST,
  status
})

export const fetchLooksSuccess = (looks) => ({
  type: FETCH_LOOKS_SUCCESS,
  looks
})

export const fetchProducts = (user) => dispatch => {
  
  console.log('play fetch!', user)
  fetch(`${API_BASE_URL}/api/products/${user}`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(res => {
      if (!res.ok){
          return Promise.reject(res.statusText)
      }
      
      console.log(res);
      return res.json()
  }) 
  .then (products => {
    
    console.log(products)
    dispatch(fetchProductsSuccess(products))})
  .catch(err => console.log(err));
};

export const fetchLooks = (authToken) => dispatch => {
  fetch(`${API_BASE_URL}/api/looks/`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`  
      }
  })
  .then(res => {
      if (!res.ok){
          return Promise.reject(res.statusText)
      }
      return res.json()
  }) 
  .then (looks =>  {
    dispatch(fetchLooksSuccess(looks))})
  .catch(err => console.log(err));
};
