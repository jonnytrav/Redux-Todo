import { ADD_TASK, TOGGLE_COMPLETED } from "../actions";

const initialState = [{ task: "Pre-filled", completed: false }];

export const todosReducer = (todos = initialState, action) => {
  console.log(todos);
  switch (action.type) {
    case ADD_TASK:
      return [...todos, action.payload];
    case TOGGLE_COMPLETED:
      let taskList = todos.map((todo, i) => {
        if (todo.id === action.payload) {
          Object.assign({}, todo, { completed: !todo.completed });
        } else {
          return;
        }
      });
      return taskList;

    default:
      return todos;
  }
};
