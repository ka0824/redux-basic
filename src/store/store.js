import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import infoReducer from './reducers/infoReducer'
import initialState from './reducers/initialState'

const store = createStore(rootReducer, composeWithDevTools());

export default store;