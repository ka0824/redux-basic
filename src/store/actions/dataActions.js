import { createAction } from 'redux-actions';

export const FETCHDATA = 'FETCH_DATA';

export const fetchData = createAction(FETCHDATA, data => data);