import {dashReducer} from './dashReducers';
import * as functions from '../actions/dashActions';

describe('dashReducer', () => {
    const detailView = 'foobar';
   const  editing =true;
    const editNumber = 'barfoo'
    const editKind = 'binbaz'
    const requestedUser ='fizzbuz'
    const search = true

  it('Should set the initial state when nothing is passed in', () => {
    const state = dashReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
        detailView: null,
        editing: false,
        editNumber: null,
        editKind: null,
        requestedUser: null,
        search: false,});
  });
  it('Should set a setSearch', () => {
    let state;
    state = dashReducer(state, functions.setSearch(search))
    expect(state.search).toEqual(search)
  })

  it('Should set showdetaiil', () => {
    let state;
    state = dashReducer(state, functions.showDetail(detailView))
    expect(state.detailView).toEqual(detailView)
  })
  it('Should set setEditing', () => {
    let state;
    state = dashReducer(state, functions.setEditing(editing))
    expect(state.editing).toEqual(editing)
  })
  it('Should set setRequestedUser', () => {
    let state;
    state = dashReducer(state, functions.setRequestedUser(requestedUser))
    expect(state.requestedUser).toEqual(requestedUser)
  })
  it('Should set edititem', () => {
    let state;
    state = dashReducer(state, functions.editItem(editNumber))
    expect(state.editNumber).toEqual(editNumber)
  })


 })