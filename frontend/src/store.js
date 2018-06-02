import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as NewsActions from './actions/NewsActions';
import reducers from './reducers';

const store = createStore(
 reducers,
 applyMiddleware(
 	thunk,
 	logger)
)

store.dispatch(NewsActions.fetchNews());

export default store;