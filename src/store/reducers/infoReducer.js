import { CHANGENAME, CHANGEAGE } from '../actions/infoActions';
import { handleActions } from 'redux-actions'

// const infoReducer = (state = initialState.info, action) => {
//     switch (action.type) {
//         case CHANGENAME :
//             return { ...state, name: action.payload }
//         case CHANGEAGE :
//             return { ...state, age: action.payload }
//         default :
//             return state
//     }
// }

const initialState = {
    name: 'kane',
    age: 40
}

const infoReducer = handleActions({
    [CHANGENAME]: (state, action) => ({
        ...state, name: action.payload
    }),
    [CHANGEAGE]: (state, action) => ({
        ...state, age: action.payload
    })
}, initialState)

export default infoReducer;