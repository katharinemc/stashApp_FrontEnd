import { CHANGE_LANDING, SUBMIT_LOGIN, SET_LOGIN_STATUS, SUBMIT_REGISTRATION, LOGIN_USER } from '../actions/landingActions'

const initialState = {
    display: 'landing',
    register: false,
    login: false
};

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_LANDING:
        console.log('lets change stuff!', action.displayType)
        console.log(Object.assign( {}, state, {display: action.displayType}))
            return Object.assign( {}, state, {display: action.displayType})
        case SUBMIT_REGISTRATION:
        console.log('submitting')
            return 'foobar'
        case SUBMIT_LOGIN:
            return 'barfoo';
        case SET_LOGIN_STATUS:
        console.log('Iassign', action.loginStatus)
            return Object.assign({}, state, {login:action.loginStatus})
    }

return state;
}