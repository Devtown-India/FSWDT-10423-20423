import customAxios from "../../utils/axios";

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await customAxios.post("/auth/login", data);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      dispatch({
        type: "LOGIN",
        payload: {
          token,
          user,
        },
      })
    } catch (error) {
      console.log(error);
    }
  }
};
