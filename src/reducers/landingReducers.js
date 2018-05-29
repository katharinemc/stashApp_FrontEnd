import { FETCH_PRODUCTS_REQUEST, SET_AUTH_TOKEN, AUTH_SUCCESS, CHANGE_LANDING, FETCH_PRODUCTS_SUCCESS, SET_FOOTER_EXPAND, SUBMIT_LOGIN, SET_LOGIN_STATUS, SUBMIT_REGISTRATION, LOGIN_USER } from '../actions/landingActions'

const initialState = {
    display: 'landing',
    register: false,
    login: false,
    expandFooter: false,
    products: [],
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: null,
    error: null
};

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_LANDING:
            return Object.assign( {}, state, {display: action.displayType})
        case SUBMIT_REGISTRATION:
            return 'foobar'
        case SUBMIT_LOGIN:
            return 'barfoo';
        case SET_LOGIN_STATUS:
            return Object.assign({}, state, {login:action.loginStatus})
        case SET_FOOTER_EXPAND:
            return Object.assign({}, state, {expandFooter: action.expandStatus})
        case FETCH_PRODUCTS_REQUEST:
            console.log('lets get somestuff')
            return Object.assign({}, state, {loading: 'true'})
        case FETCH_PRODUCTS_SUCCESS: 
            console.log('a success is made!', action.products)
            return Object.assign({}, state, {products: [...action.products]}, {loading: 'complete'}, {display: 'dash'})
        case SET_AUTH_TOKEN :
            return Object.assign( {}, state, {authToken:action.authToken})
        case AUTH_SUCCESS:
            return Object.assign({}, state, {currentUser: action.currentUser})
    }

return state;
}