import customAxios from "../../utils/axios";

export const loginUser = (data) =>  async (dispatch)=>{
  try {
    const res = await customAxios.post("/auth/login", data);
    const { token, user } = res.data;
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
};

export const signupUser = (data) =>  async (dispatch)=>{
  try {
    const res = await customAxios.post("/auth/signup", data);
    dispatch({
      type: "SIGNUP",
    })
    dispatch(loginUser(data))
  } catch (error) {
    console.log(error);
  }
};
