import {API_BASE_URL} from '../config';
import {fetchProductsRequest} from './landingActions'

export const SHOW_DETAIL = 'SHOW_DETAIL';
export const SET_EDITING = 'SET_EDITING';
export const NEW_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS';
export const  PRODUCT_DELETE_SUCCESS = ' PRODUCT_DELETE_SUCCESS';

export const showDetail = (key) => ({type: SHOW_DETAIL, key})

export const setEditing = (status) => ({type: SET_EDITING, status})

export const newProductSuccess = (values) => ({type: NEW_PRODUCT_SUCCESS, values})

export const productDeleteSuccess = (itemId) => ({type: PRODUCT_DELETE_SUCCESS, itemId})

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

console.log(itemId, authToken)
  fetch(`${API_BASE_URL}/api/products/${itemId}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    console.log(res.status, res.response);
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }

    else if(res.status ===204) {
      console.log('deleted')
      dispatch(productDeleteSuccess(itemId))
    }


  })    
}

