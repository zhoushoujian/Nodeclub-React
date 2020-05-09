//actionType
const USERNAME = "USERNAME";

// initialSate
const initialState = () => ({
	username: "name",
});

// Reducer
export default function reducer(state = initialState(), action = {}) {
	switch (action.type) {
		case USERNAME:
			return Object.assign({}, state, {
				username: action.data
			});
		default:
			return state;
	}
}

// update
export const updateUsername = data => ({
	type: USERNAME,
	data
});
