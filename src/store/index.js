import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { countReducer } from "./countReducer";
import { customerReducer } from "./customerReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const sageMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  counter: countReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sageMiddleware)));

sageMiddleware.run(rootWatcher);
