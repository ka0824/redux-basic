import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
    info: infoReducer,
    data: dataReducer
});

export default rootReducer;