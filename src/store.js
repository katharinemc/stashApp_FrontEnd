import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {mainReducer} from './reducers/landingReducers';

export default createStore(mainReducer,
    applyMiddleware(thunk));