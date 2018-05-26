import {createStore} from 'redux'

import {mainReducer} from './reducers/landingReducers';

export default createStore(mainReducer);