import { combineReducers } from 'redux';
import userReducer from './user';
import DataReducer from "./data"
import localsReducer from "./locals"

export default combineReducers({
		user: userReducer,
		data: DataReducer,
		locals: localsReducer
});
