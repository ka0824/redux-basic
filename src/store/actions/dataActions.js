import { createAction } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getData } from '../../util/fetchFuncs';
import axios from 'axios';

export const FETCHDATA = 'FETCH_DATA';
export const FETCHDATASUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCHDATAERROR = 'FETCH_DATA_ERROR';

export const fetchData = createAction(FETCHDATA);
export const fetchDataSuccess = createAction(FETCHDATASUCCESS, data => data);
export const fetchDataError = createAction(FETCHDATAERROR, error => error);

// thunk를 이용했을 때의 비동기 처리 요청 함수 입니다.
// export const asyncFetch = () => async (dispatch) => {
//     dispatch(fetchData());
//     try {
//         const result = await axios.get('http://localhost:3001');
//         dispatch(fetchDataSuccess(result.data));
//     } catch (error) {
//         dispatch(fetchDataError(error));
//     }
// }

const axiosData = async() => {
    const result = await axios.get('http://localhost:3001')
    return result.data;
}

function* fetchDataSaga() {
    try {
        const result = yield call(axiosData);
        yield put(fetchDataSuccess(result));
    } catch (err) {
        yield put(fetchDataError(err));
    }
}

export function* dataSaga() {
    yield takeEvery(FETCHDATA, fetchDataSaga);
}