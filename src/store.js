import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {mainReducer} from './reducers/landingReducers';

const rootReducer=combineReducers({
main: mainReducer,
    form: formReducer
  })

export default createStore(rootReducer,
    applyMiddleware(thunk));