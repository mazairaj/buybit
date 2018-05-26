import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './Reducers/reducerCombine';
import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {
	const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
	return createStoreWithMiddleware(createReducer(), initialState);
}
module.exports = configureStore;