import {createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];


// const store = createStore(reducer);
// WITHOUT REDUX-THUNK
// const store = createStore(reducer, composeWithDevTools());

//WITH REDUX-THUNK
const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware)));


export default store;