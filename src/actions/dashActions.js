import {API_BASE_URL} from '../config';
import {fetchProductsRequest, setWarning} from './landingActions'
import {caughtError} from './auth'
export const SET_REQUESTED_USER='SET_REQUESTED_USER'
export const EDIT_ITEM ='EDIT_ITEM'
export const SET_SEARCH='SET_SEARCH'
export const SHOW_DETAIL = 'SHOW_DETAIL';
export const SET_EDITING = 'SET_EDITING';
export const NEW_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS';

export const UPDATE_LOOK_SUCCESS = 'UPDATE_LOOK_SUCCESS'
export const  ITEM_DELETE_SUCCESS = 'ITEM_DELETE_SUCCESS';
export const ADD_TO_LOOK_SEARCH='ADD_TO_LOOK_SEARCH';
export const NEW_LOOK_SUCCESS='NEW_LOOK_SUCCESS'
export const UPDATE_PRODUCT_SUCCESS='UPDATE_PRODUCT_SUCCESS'

export const updateProductSuccess = (values) => ({type: UPDATE_PRODUCT_SUCCESS, values})
export const updateLookSuccess = (values) => ({type: UPDATE_LOOK_SUCCESS, values})
export const editItem = (number, kind) => ({type:EDIT_ITEM, number, kind})

export const addToLookSearch = (values) => ({type: ADD_TO_LOOK_SEARCH, values})
export const showDetail = (key) => ({type: SHOW_DETAIL, key})

export const setEditing = (status) => ({type: SET_EDITING, status})

export const newProductSuccess = (values) => ({type: NEW_PRODUCT_SUCCESS, values})

export const itemDeleteSuccess = (number, kind) => ({type: ITEM_DELETE_SUCCESS, number, kind})
export const newLookSuccess = (values) => ({type: NEW_LOOK_SUCCESS, values})

export const setSearch = (values) => ({type:SET_SEARCH, values})

export const setRequestedUser = (user) => {

return ({
  type: SET_REQUESTED_USER,
  user
})
}




export const updateProduct = (values, authToken, number) => async dispatch => {
  const {brand, category, name, shade} = values
  const itemId = number

  let newObj = {
    brand,
    category,
    name,
    shade
  }

  const res= await  fetch(`${API_BASE_URL}/api/products/${itemId}`, {
    method: 'put',
    body: JSON.stringify(newObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })

  const data = await res.json()  
  if(res.status === 200){
    dispatch(updateProductSuccess(data))
    dispatch(setEditing('false'))  
  }


}

export const sendEditLook = (values, productIds, authToken, number) => async dispatch => {
  const {name} = values

  let newObj = {
    name,
    productIds
  }

  const res= await fetch(`${API_BASE_URL}/api/looks/${number}`, {
    method: 'put',
    body: JSON.stringify(newObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
  const data = await res.json()
if(res.status === 200){
  dispatch(updateLookSuccess(data))
  dispatch(setEditing('false'))  
}

//KRM NEEDS ERROR HANDLING

}

export const sendNewProduct = (values, authToken) => async dispatch => {
  const {brand, category, name, shade, notes} = values

  let newObj = {
    brand,
    category,
    name,
    shade,
    notes
  }
const res= await  fetch(`${API_BASE_URL}/api/products/`, {
    method: 'post',
    body: JSON.stringify(newObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
  const data = await res.json()  
  console.log('res and data', res, data)
  if (res.status === 400) {
    console.log('gotcha!')
  dispatch(caughtError('This product already exists in your collection!'))
} else {
  dispatch(newProductSuccess(data))
  dispatch(setEditing('false'))  
}
}
  

export const deleteItem = (number, kind, authToken) => dispatch => {
  fetch(`${API_BASE_URL}/api/${kind}/${number}`, {
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
      dispatch(itemDeleteSuccess(number, kind))
      dispatch(setWarning(null))
    }


  })    
}

export const sendNewLook = (values, products, authToken) => async dispatch => {
  const name = values.name

  let newLook = {
    name,
    products
  }
 const res = await fetch(`${API_BASE_URL}/api/looks/`, {
    method: 'post',
    body: JSON.stringify(newLook),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
  
  const data = await res.json()
 
 if(res.status === 200){
   dispatch(newLookSuccess(data))
   dispatch(setEditing('false'))
   dispatch(caughtError(null))
 } else {
  dispatch(caughtError('You already have a Look with this name'))
}
}
