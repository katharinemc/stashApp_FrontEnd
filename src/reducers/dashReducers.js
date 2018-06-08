import {SHOW_DETAIL, SET_SEARCH, EDIT_ITEM, SET_EDITING, SET_REQUESTED_USER} from '../actions/dashActions'

const initialState = {
  detailView: null,
  editing: false,
  editNumber: null,
  editKind: null,
  requestedUser: null,
  search: false
};

export const dashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, {search: action.values})
    case SHOW_DETAIL:
      return Object.assign({}, state, {detailView: action.key})
    case SET_EDITING:
      return Object.assign({}, state, {editing: action.status})
    case SET_REQUESTED_USER:
      return Object.assign({}, state, {requestedUser: action.user})
    case EDIT_ITEM:
      return Object.assign({}, state, {
        editNumber: action.number
      }, {editKind: action.kind})
    default:
      return state;
  }

}