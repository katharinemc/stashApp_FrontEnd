import { SHOW_DETAIL,EDIT_ITEM, SET_EDITING} from '../actions/dashActions'

const initialState = {
detailView: null,
editing: false,
editNumber: null,
editKind: null
};

export const dashReducer = (state=initialState, action) => {
    switch(action.type){
        case SHOW_DETAIL:
            return Object.assign( {}, state, {detailView: action.key})
        case SET_EDITING:
            return Object.assign( {}, state, {editing: action.status})
        case EDIT_ITEM:
            return Object.assign( {}, state, {editNumber: action.number}, {editKind: action.kind})

      }

return state;
}