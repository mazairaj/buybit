import { reducerLogin } from './reducerLogin';
import { reducerItem } from './reducerItem';

import { combineReducers } from 'redux-immutablejs';

const applicationReducers = {
	userProfile: reducerLogin,
	store: reducerItem,
};

export default function createReducer() {
	return combineReducers(applicationReducers);
}