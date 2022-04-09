import { FETCHDATA, FETCHDATASUCCESS, FETCHDATAERROR } from '../actions/dataActions';
import { handleActions } from 'redux-actions';

const initialState = {
    loading: false,
    data: [],
    error: null
}

const dataReducer = handleActions({
    [FETCHDATA]: (state, action) => ({ ...state, loading: true }),
    [FETCHDATASUCCESS]: (state, action) => ({ ...state, data: action.payload, loading: false }),
    [FETCHDATAERROR]: (state, action) => ({ ...state, error: action.payload, loading: false })
}, initialState);

export default dataReducer;