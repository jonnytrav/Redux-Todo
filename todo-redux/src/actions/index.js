export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: {
      task: task,
      completed: false
    }
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
