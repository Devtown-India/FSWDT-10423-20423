export const todosReducer = (state, action) => {
  const { todos } = state;
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
