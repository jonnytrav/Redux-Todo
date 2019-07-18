const initialState = () => {
  return {
    task: "Pre-filled",
    completed: false
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
