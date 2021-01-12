import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {gamesReducer} from './reducers/reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
            gamesReducer, 
            initialState, 
            applyMiddleware(...middleware), 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            );

export default store;