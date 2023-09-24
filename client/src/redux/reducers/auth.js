const initalState = {
  token: null,
  user: null,
};

const authReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      }
    default:
      return state;
  }
};

export default authReducer;