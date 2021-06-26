import authReducer from "./authReducer";
import postReducer from "./postReducer";
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    posts: postReducer
});;