import { ADD_TASK, TOGGLE_COMPLETED, CLEAR_COMPLETED } from "../actions";

const initialState = { taskList: [{ task: "Pre-filled", completed: false }] };

export const todosReducer = (todos = initialState, action) => {
  //   console.log(todos);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...todos,
        taskList: [...todos.taskList, action.payload]
      };
    case TOGGLE_COMPLETED:
      return {
        ...todos,
        taskList: todos.taskList.map((todo, i) => {
          if (i === action.payload) {
            return Object.assign({}, todo, { completed: !todo.completed });
          } else {
            return todo;
          }
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...todos,
        taskList: todos.taskList.filter(task => !task.completed)
      };
    default:
      return todos;
  }
};
