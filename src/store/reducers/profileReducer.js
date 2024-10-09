import initialState from '../initialState';
import ACTION_1 from '../actions/changeName';
import ACTION_2 from '../actions/changeLanguages';

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_1:
			return { ...state, ...action.payload };
		case ACTION_2:
			return { ...state };

		default:
			return state;
	}
};

export default profileReducer;
