import {API_BASE_URL} from '../config'

export const SHOW_DETAIL = 'SHOW_DETAIL';
export const SET_EDITING = 'SET_EDITING';
export const NEW_PRODUCT_SUCCESS ='NEW_PRODUCT_SUCCESS';

export const showDetail = (key) => ({
    type:SHOW_DETAIL,
    key
  })


  export const setEditing = (status) => ({
    type:SET_EDITING,
    status
  })

  export const newProductSuccess = (values) => ({
    type: NEW_PRODUCT_SUCCESS,
    values
  })



  export const sendNewProduct = (values, currentUser, authToken) => dispatch => {
 const {brand, category, name, shade} = values
console.log('sending user', currentUser, 'and token', authToken)

let newObj = {
   brand,
   category,
   name,
   shade, 
  username: currentUser
}
console.log( newObj)

    fetch(`${API_BASE_URL}/api/products/`, {
        method: 'post',
        body: JSON.stringify(newObj),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`  
        }
    })
    .then(res => {
        if (!res.ok){
            return Promise.reject(res.statusText)
        }
        console.log('post res', res)
        return res.json()
    }) 
    // .then (products => dispatch(fetchProductsSuccess(products)))
    .catch(err => console.log(err));
  };
  
  