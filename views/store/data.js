//actionType
const SERVER_DATA = "SERVER_DATA";

// initialSate
const initialState = () => ({
  serverData: {},
});

// Reducer
export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
    case SERVER_DATA:
      return Object.assign({}, state, { serverData: action.data });
    default:
      return state;
  }
}

// update
export const updateServerData = data => ({
  type: SERVER_DATA,
  data
});
