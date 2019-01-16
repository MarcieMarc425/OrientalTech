import { ADD_SEARCH_PARAM } from '../constants/action-types';
import { CLEAR_SEARCH } from '../constants/action-types';

const initialSearchParam = {
	query: {
		job: '',
		location: ''
	}
};

export default function search(state = initialSearchParam, action = {}) {
	switch (action.type) {
		case ADD_SEARCH_PARAM:
			return Object.assign({}, action, {
				query: {
					job: action.searchParam.job,
					location: action.searchParam.location
				}
			});

		case CLEAR_SEARCH:
			return Object.assign({}, action, {
				query: {
					job: '',
					location: ''
				}
			});

		default:
			return state;
	}
}
