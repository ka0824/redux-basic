import { createAction } from "redux-actions";

export const CHANGENAME = 'CHANGE_NAME';
export const CHANGEAGE = 'CHANGE_AGE';

export const changeName = createAction(CHANGENAME, (name) => name);
export const changeAge = createAction(CHANGEAGE, (age) => age);

export const asyncChange = () => (dispatch) => {
    setTimeout(() => dispatch(changeName('james')), 1000);
}

// export const chagneName = (payload) => {
//     return {
//         type: CHANGENAME,
//         payload
//     }
// }

// export const changeAge = (payload) => {
//     return {
//         type: CHANGEAGE,
//         payload
//     }
// }