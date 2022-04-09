import initialState from './initialState';
import { CHANGENAME, CHANGEAGE } from '../actions/infoActions';

const infoReducer = (state = initialState.info, action) => {
    switch (action.type) {
        case CHANGENAME :
            return { ...state, name: action.payload }
        case CHANGEAGE :
            return { ...state, age: action.payload }
        default :
            return state
    }
}

export default infoReducer;