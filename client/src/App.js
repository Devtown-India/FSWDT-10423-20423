import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/auth";
import { useDispatch } from "react-redux";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import CreatePost from "./components/posts/Create";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
