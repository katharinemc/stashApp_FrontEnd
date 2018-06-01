import { FETCH_PRODUCTS_REQUEST, FETCH_LOOKS_SUCCESS, CHANGE_LANDING, FETCH_PRODUCTS_SUCCESS, SET_FOOTER_EXPAND, } from '../actions/landingActions'
import { LOG_OUT_STORE } from '../actions/auth'
import { ADD_TO_LOOK_SEARCH, UPDATE_PRODUCT_SUCCESS, NEW_LOOK_SUCCESS, NEW_PRODUCT_SUCCESS, PRODUCT_DELETE_SUCCESS, UPDATE_LOOK_SUCCESS, ITEM_DELETE_SUCCESS } from '../actions/dashActions'

const initialState = {
    display: 'landing',
    expandFooter: false,
    products: [],
    loading: null,
    error: null,
    looks: [],
    addToLookResults: []
};

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_PRODUCT_SUCCESS:

        return Object.assign( {} , state, {products: [... state.products.filter(item => item.id != action.values.id), action.values] })

        case UPDATE_LOOK_SUCCESS:
            console.log(action)
            return Object.assign( {} , state, {looks: [... state.looks.filter(item => item.id != action.values.id), action.values] })
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
        case NEW_LOOK_SUCCESS:
            return Object.assign({}, state, {looks: [... state.looks, action.values]})
        case FETCH_LOOKS_SUCCESS:
            return Object.assign({}, state, {looks: [...action.looks]},{loading: 'complete'} )
        case  ITEM_DELETE_SUCCESS:
        let kind = action.kind
            return Object.assign({}, state, { [kind]: state[kind].filter(item => item.id!=action.number ) })
        case ADD_TO_LOOK_SEARCH:
            return Object.assign({}, state, {addToLookResults: state.products.filter(product => product === action.values)})
    }

return state;
}