import { ADD_SEARCH_PARAM } from '../constants/action-types';
import { CLEAR_SEARCH } from '../constants/action-types';

export const addSearch = searchParam => dispatch => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 10);
	}).then(() => {
		dispatch({ type: ADD_SEARCH_PARAM, searchParam });
	});
};

export const clearSearch = () => dispatch => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 10);
	}).then(() => {
		dispatch({ type: CLEAR_SEARCH });
	});
};
