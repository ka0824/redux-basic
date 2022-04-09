import { FETCHDATA } from '../actions/dataActions';
import { handleActions } from 'redux-actions';

const initialState = {
    data: []
}

const dataReducer = handleActions({
    [FETCHDATA]: (state, data) => ({ ...state, data: data})
}, initialState);

export default dataReducer;