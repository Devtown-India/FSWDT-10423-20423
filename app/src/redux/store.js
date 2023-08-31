import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  todos: [],
};
const middleware = [thunk];

export const store = createStore(
  todosReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
