import {mainReducer} from './landingReducers';
import * as functions from '../actions/landingActions';
import * as dashFunctions from '../actions/dashActions';
describe('dashReducer', () => {
  const  display  = 'foobar';
  const  expandFooter = true;
  const  products = ['barfoo', 'binbz'];
  const  loading = true;
  const  error  = 'qaz'
  const  look = ['fizbuzz', 'buzz'];
  const  addToLookResults = ['bar', 'foo']
  const  warning = 'foobarbar'


  it('Should set the initial state when nothing is passed in', () => {
    const state = mainReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
        display: 'landing',
        expandFooter: false,
        products: [],
        loading: null,
        error: null,
        looks: [],
        addToLookResults: [],
        warning: null,
    });
  });
  it('Should set a setSearch', () => {
    let state;
    state = mainReducer(state, functions.setWarning(warning))
    expect(state.warning).toEqual(warning)
  })



 })