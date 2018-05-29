import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {mainReducer} from './reducers/landingReducers';
import {setAuthToken, refreshAuthToken} from './actions/auth'
import {loadAuthToken} from './local-storage'
import { authReducer } from './reducers/authReducers';
import { fetchProducts } from './actions/landingActions';
import { dashReducer } from './reducers/dashReducers';

const rootReducer=combineReducers({
main: mainReducer,
    form: formReducer,
    auth: authReducer,
    dash: dashReducer
  })

  const store= createStore(rootReducer,
    applyMiddleware(thunk));

    const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    // store.dispatch(refreshAuthToken());
    store.dispatch(fetchProducts(token))
}

export default store;