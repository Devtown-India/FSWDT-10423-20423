import customAxios from "../../utils/axios";

export const loginUser = async (data) => {
  try {
    const res = await customAxios.post("/auth/login", data);
    const { token, user } = res.data;
    return {
      type: "LOGIN",
      payload: {
        token,
        user,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
