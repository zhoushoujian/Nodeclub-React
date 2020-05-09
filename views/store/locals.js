//actionType
const LOCALS = "LOCALS";

// initialSate
const initialState = () => ({
	locals: {}
});

// Reducer
export default function reducer(state = initialState(), action = {}) {
	switch (action.type) {
		case LOCALS:
			return Object.assign({}, state, { locals: action.data });
		default:
			return state;
	}
}

// update
export const updateLocals = data => ({
	type: LOCALS,
	data
});
