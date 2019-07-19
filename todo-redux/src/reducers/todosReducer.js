import { ADD_TASK } from "../actions";

export const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...todos, action.payload];
    default:
      return todos;
  }
};
