import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import {fetchUsers} from '../store/actions/postActions';
import rootReducer from "./reducers/rootReducer";

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer,compose(applyMiddleware(thunk)));
store.dispatch(fetchUsers());
export default store;
