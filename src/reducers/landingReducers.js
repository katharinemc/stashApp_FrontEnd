import { CHANGE_LANDING, FETCH_PRODUCTS_SUCCESS, SET_FOOTER_EXPAND, SUBMIT_LOGIN, SET_LOGIN_STATUS, SUBMIT_REGISTRATION, LOGIN_USER } from '../actions/landingActions'

const initialState = {
    display: 'landing',
    register: false,
    login: false,
    expandFooter: false,
    products: []
};

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_LANDING:
        console.log(Object.assign( {}, state, {display: action.displayType}))
            return Object.assign( {}, state, {display: action.displayType})
        case SUBMIT_REGISTRATION:
            return 'foobar'
        case SUBMIT_LOGIN:
            return 'barfoo';
        case SET_LOGIN_STATUS:
            return Object.assign({}, state, {login:action.loginStatus})
        case SET_FOOTER_EXPAND:
            return Object.assign({}, state, {expandFooter: action.expandStatus})
        case FETCH_PRODUCTS_SUCCESS: 
        console.log('reducer products', ...action.products)
        return Object.assign({}, state, {products: [...state.products, ...action.products]})
    }

return state;
}