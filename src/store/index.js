import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import showsReducer from "store/entities/shows/reducers/reducer";
import paymentReducer from "store/entities/payment/reducers/reducer";

const reducers = { shows: showsReducer, payment: paymentReducer };

export const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);
