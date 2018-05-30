import {API_BASE_URL} from '../config'

export const FETCH_LOOKS_SUCCESS='FETCH_LOOKS_SUCCESS'
export const CHANGE_LANDING = 'CHANGE_LANDING';
export const SET_FOOTER_EXPAND = 'SET_FOOTER_EXPAND'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_LOOKS_REQUEST='FETCH_LOOKS_REQUEST'

export const changeLanding = (displayType) => ({
  type: CHANGE_LANDING,
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

export const fetchProducts = (authToken) => dispatch => {
  fetch(`${API_BASE_URL}/api/products/`, {
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
  .then (products => dispatch(fetchProductsSuccess(products)))
  .catch(err => console.log(err));
};

export const fetchLooks = (authToken) => dispatch => {
  console.log('inside fetchLooks get token with token', authToken)
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
    console.log('these looks about to leave actions')
    dispatch(fetchLooksSuccess(looks))})
  .catch(err => console.log(err));
};
