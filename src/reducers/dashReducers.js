import { SHOW_DETAIL, SET_EDITING} from '../actions/dashActions'

const initialState = {
detailView: null,
editing: false,
};

export const dashReducer = (state=initialState, action) => {
    switch(action.type){
        case SHOW_DETAIL:
            return Object.assign( {}, state, {detailView: action.key})
            case SET_EDITING:
            return Object.assign( {}, state, {editing: action.status})
        }

return state;
}