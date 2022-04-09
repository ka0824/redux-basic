export const CHANGENAME = 'CHANGE_NAME';
export const CHANGEAGE = 'CHANGE_AGE';

export const chagneName = (payload) => {
    return {
        type: CHANGENAME,
        payload
    }
}

export const changeAge = (payload) => {
    return {
        type: CHANGEAGE,
        payload
    }
}