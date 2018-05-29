import { FETCH_PRODUCTS_REQUEST, CHANGE_LANDING, FETCH_PRODUCTS_SUCCESS, SET_FOOTER_EXPAND, } from '../actions/landingActions'

const initialState = {
    display: 'landing',
    expandFooter: false,
    products: [],
    loading: null,
    error: null
};

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_LANDING:
            return Object.assign( {}, state, {display: action.displayType})
        case SET_FOOTER_EXPAND:
            return Object.assign({}, state, {expandFooter: action.expandStatus})
        case FETCH_PRODUCTS_REQUEST:
            return Object.assign({}, state, {loading: 'true'})
        case FETCH_PRODUCTS_SUCCESS: 
            return Object.assign({}, state, {products: [...action.products]}, {loading: 'complete'}, {display: 'dash'})
    }

return state;
}