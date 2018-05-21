import { reducerLogin } from './reducerLogin';
import { reducerItem } from './reducerItem';

import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	userProfile: loginReducer,
	store: profileReducer,
};

export default function createReducer() {
	return combineReducers(applicationReducers);
}