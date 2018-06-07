import {authReducer} from './authReducers';
import * as functions from '../actions/auth';

describe('authReducer', () => {
  const login = true;
  const authToken = 'foobar';
  const currentUser = 'barfoo';
  const error = 'binbaz';
  const newUser = true

  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({login: false, authToken: null, currentUser: null, error: null, newUser: false});
  });
  it('Should set a new user when newUser is passed in', () => {
    let state;
    state = authReducer(state, functions.newUser(newUser))
    expect(state.newUser).toEqual(newUser)
  })

  it('Should set an errorr when error is passed in', () => {
    let state;
    state = authReducer(state, functions.caughtError(error))
    expect(state.error).toEqual(error)
  })


  it('Should clear AuthToken and currentUsor', () => {
    let state = {
      authToken: 'barfoo', // authToken !== null does not mean it has been validated
      currentUser: 'foobar'
    }
    state = authReducer(state, functions.logOutStore())
    expect(state).toEqual({
      authToken: null, // authToken !== null does not mean it has been validated
      currentUser: null
    })
  })

  it('Should set AUTH', () => {
    let state;
    state = authReducer(state, functions.setAuthToken(authToken))
    expect(state.authToken).toEqual(authToken)
  })

  it('Should set auth success', () => {
    let state;
    state = authReducer(state, functions.authSuccess(currentUser))
    expect(state.currentUser).toEqual(currentUser)
  })

})