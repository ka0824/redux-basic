import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import infoReducer from './infoReducer';
import { dataSaga } from '../actions/dataActions';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    info: infoReducer,
    fetchData: dataReducer
});

export function* rootSaga() {
    yield all([dataSaga()]);
}

export default rootReducer;