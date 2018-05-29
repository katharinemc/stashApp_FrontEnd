import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {mainReducer} from './reducers/landingReducers';
import {setAuthToken, refreshAuthToken} from './actions/landingActions'
import {loadAuthToken} from './local-storage'

const rootReducer=combineReducers({
main: mainReducer,
    form: formReducer
  })

  const store= createStore(rootReducer,
    applyMiddleware(thunk));

    const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    // store.dispatch(refreshAuthToken());
}

export default store;