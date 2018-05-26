import { reducerLogin } from './reducerLogin';
import { reducerItem } from './reducerItem';
import { reducerCart } from './reducerCart';

import { combineReducers } from 'redux-immutablejs';

const applicationReducers = {
	userProfile: reducerLogin,
	store: reducerItem,
	cart: reducerCart
};

export default function createReducer() {
	return combineReducers(applicationReducers);
}