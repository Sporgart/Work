import ACTION_1 from '../actions/changeName';

export const updateProfile = (payload) => {
	return {
		type: ACTION_1,
		payload,
	};
};
