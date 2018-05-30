import { FETCH_PRODUCTS_REQUEST, FETCH_LOOKS_SUCCESS, CHANGE_LANDING, FETCH_PRODUCTS_SUCCESS, SET_FOOTER_EXPAND, } from '../actions/landingActions'
import { LOG_OUT_STORE } from '../actions/auth'
import { NEW_PRODUCT_SUCCESS, PRODUCT_DELETE_SUCCESS } from '../actions/dashActions'

const initialState = {
    display: 'landing',
    expandFooter: false,
    products: [],
    loading: null,
    error: null,
    looks: []
};

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case  LOG_OUT_STORE:
            return  Object.assign( {}, state, {products: []}, {looks: []})
        case CHANGE_LANDING:
            return Object.assign( {}, state, {display: action.displayType})
        case SET_FOOTER_EXPAND:
            return Object.assign({}, state, {expandFooter: action.expandStatus})
        case FETCH_PRODUCTS_REQUEST:
            return Object.assign({}, state, {loading: 'true'})
        case FETCH_PRODUCTS_SUCCESS: 
            return Object.assign({}, state, {products: [...action.products]}, {loading: 'complete'})
        case NEW_PRODUCT_SUCCESS: 
            return Object.assign({}, state, {products: [...state.products, action.values]})
        case FETCH_LOOKS_SUCCESS:
            return Object.assign({}, state, {looks: [...action.looks]},{loading: 'complete'} )
        case  PRODUCT_DELETE_SUCCESS:
            return Object.assign({}, state, {products: state.products.filter(product => product.id!=action.itemId ) })
    }

return state;
}