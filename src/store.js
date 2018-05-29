import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {mainReducer} from './reducers/landingReducers';
import {setAuthToken, authSuccess, refreshAuthToken, } from './actions/auth'
import {loadAuthToken, loadCurrentUser} from './local-storage'
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
    console.log('about to fetch with token', token)
    store.dispatch(fetchProducts(token))
}

const currentUser = loadCurrentUser();
if (currentUser) {
    const user = currentUser;
    console.log('store', user)
    store.dispatch(authSuccess(user));
}

export default store;