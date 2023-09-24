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
    case "LOAD_USER":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      }
    case "SIGNUP":
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default authReducer;