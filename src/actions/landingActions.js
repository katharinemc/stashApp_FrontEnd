import {API_BASE_URL} from '../config'
import {setSearch} from './dashActions'

export const FETCH_LOOKS_SUCCESS='FETCH_LOOKS_SUCCESS'
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
export const SET_FOOTER_EXPAND = 'SET_FOOTER_EXPAND'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_LOOKS_REQUEST='FETCH_LOOKS_REQUEST'
export const SET_WARNING='SET_WARNING'

export const setWarning = (warning) => ({

  type: SET_WARNING,
  warning
})

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

export const searchProducts = (user, number) => dispatch => {
  console.log('searching first', user, number)
    var url = new URL(`${API_BASE_URL}/api/products/${user}`),
    params = number
  if (params != null){
  
  url.searchParams.append( '_id', number)
  }
  
 fetch( url, {
        method: 'get',
        headers: {
          "Content-Type": "application/json",
        }
    })
    .then(res => {
        if (!res.ok){
            return Promise.reject(res.statusText)
        }
        return res.json()
    }) 
    .then(res => {
      console.log('search found', res)
      if(res[0].looksId.length > 0) {
        dispatch(setWarning(`This product appears in ${res[0].looksId.length} looks.  Are you sure you wish to delete? `))
      }
    }) }


export const fetchProducts = (user, string, query) => dispatch => {
  var url = new URL(`${API_BASE_URL}/api/products/${user}`),
  params = string
if (params != null){

url.searchParams.append( query.searchType, params)
}

fetch( url, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(res => {
      if (!res.ok){
          return Promise.reject(res.statusText)
      }
      return res.json()
  }) 
  .then (products => {
    dispatch(fetchProductsSuccess(products))})
  .catch(err => console.log(err));
};

export const fetchLooks = (user, string, query) => dispatch => {
var url = new URL(`${API_BASE_URL}/api/looks/${user}`);
if(string !=null)
{url.searchParams.append(query.searchType,  string)
}
console.log(url)
  fetch(url, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(res => {
      if (!res.ok){
          return Promise.reject(res.statusText)
      }
      return res.json()
  }) 
  .then (looks =>  {
    console.log(looks)
    dispatch(fetchLooksSuccess(looks))})
  .catch(err => console.log(err));
};
