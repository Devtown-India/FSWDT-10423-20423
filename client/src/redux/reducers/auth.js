const initalState = {
  token: null,
  user: null,
  loggedIn:null,
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
    case "UPDATE_AUTH_STATE":
      return {
        ...state,
        loggedIn: payload
      }
    default:
      return state;
  }
};

export default authReducer;