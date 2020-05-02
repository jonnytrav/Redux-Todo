import { combineReducers } from "redux";
import { todosReducer as todo } from "./todosReducer";

export const rootReducer = combineReducers({
  todo
});
