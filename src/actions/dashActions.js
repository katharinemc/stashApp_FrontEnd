import {API_BASE_URL} from '../config';
import {fetchProductsRequest} from './landingActions'

export const SHOW_DETAIL = 'SHOW_DETAIL';
export const SET_EDITING = 'SET_EDITING';
export const NEW_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS';
export const  PRODUCT_DELETE_SUCCESS = ' PRODUCT_DELETE_SUCCESS';
export const ADD_TO_LOOK_SEARCH='ADD_TO_LOOK_SEARCH';
export const NEW_LOOK_SUCCESS='NEW_LOOK_SUCCESS'

export const addToLookSearch = (values) => ({type: ADD_TO_LOOK_SEARCH, values})
export const showDetail = (key) => ({type: SHOW_DETAIL, key})

export const setEditing = (status) => ({type: SET_EDITING, status})

export const newProductSuccess = (values) => ({type: NEW_PRODUCT_SUCCESS, values})

export const productDeleteSuccess = (itemId) => ({type: PRODUCT_DELETE_SUCCESS, itemId})
export const newLookSuccess = (values) => ({type: NEW_LOOK_SUCCESS, values})

export const sendNewProduct = (values, currentUser, authToken) => dispatch => {
  const {brand, category, name, shade} = values

  let newObj = {
    brand,
    category,
    name,
    shade
  }
  fetch(`${API_BASE_URL}/api/products/`, {
    method: 'post',
    body: JSON.stringify(newObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  }).then((res) => {

    //KRM make clean object to pass to newProductSuccess
    dispatch(newProductSuccess(res))
  }).then(() => dispatch(setEditing('false')))
}

  
export const deleteProduct = (itemId, authToken) => dispatch => {
  fetch(`${API_BASE_URL}/api/products/${itemId}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }

    else if(res.status ===204) {
      dispatch(productDeleteSuccess(itemId))
    }


  })    
}

export const sendNewLook = (values, products, authToken) => dispatch => {
  const name = values.name

  let newLook = {
    name,
    products
  }
  fetch(`${API_BASE_URL}/api/looks/`, {
    method: 'post',
    body: JSON.stringify(newLook),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    // console.log(res)
    return res.json()
  }).then(res => {
    console.log(res)
      dispatch(newLookSuccess(res))
  }) .then(() => dispatch(setEditing('false')))
}
