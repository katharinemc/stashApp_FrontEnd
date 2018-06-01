import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {mainReducer} from './reducers/landingReducers';
import {setAuthToken, authSuccess, refreshAuthToken, } from './actions/auth'
import {loadAuthToken, loadCurrentUser} from './local-storage'
import { authReducer } from './reducers/authReducers';
import { fetchProducts, fetchLooks } from './actions/landingActions';
import { dashReducer } from './reducers/dashReducers';

const rootReducer=combineReducers({
main: mainReducer,
    form: formReducer,
    auth: authReducer,
    dash: dashReducer
  })

  const store= createStore(rootReducer,
    applyMiddleware(thunk));


    const currentUser = loadCurrentUser();
if (currentUser) {
    const user = currentUser;
    store.dispatch(authSuccess(user));
}


    const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(fetchProducts(currentUser))
    // store.dispatch(fetchLooks(currentUser))

}



export default store;