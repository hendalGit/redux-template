import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import reducer from ".\reducers\defaultReducer.js";

export default createStore(
    combineReducers({
        reducer
    }),
    {},
    applyMiddleware()
);

