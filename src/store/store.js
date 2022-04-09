import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { rootSaga } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(sagaMiddleware, logger) ));

sagaMiddleware.run(rootSaga);

export default store;