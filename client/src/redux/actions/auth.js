import customAxios from "../../utils/axios";

export const loginUser = (data) =>  async (dispatch)=>{
  try {
    const res = await customAxios.post("/auth/login", data);
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

export const loadUser = (data) =>  async (dispatch)=>{
  try {
    const token = localStorage.getItem("token");
    if(!token) return;
    const res = await customAxios.get(`/auth/validate/${token}`, data);
    const {user} = res.data;
    if(!user){
      localStorage.removeItem("token");
      return;
    }
    customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    dispatch({
      type: "LOAD_USER",
      payload: {
        user,
        token
      },
    })
    dispatch(loginUser(data))
  } catch (error) {
    console.log(error);
  }
};
