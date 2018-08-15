import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store;

if (process.env.NODE_ENV !== 'production') {
	store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(...middleware),
			devTools
		)
	);
} else {
	store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}

export default store;