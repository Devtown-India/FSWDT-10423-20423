import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Todo = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [todos, segtTodos] = useState([]);
  const navigagte = useNavigate();

  const validateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) navigagte("/login");
      const { data: response } = await axios.get(
        `http://localhost:8080/api/auth/validateToken/${token}`
      );
      setUser(response.data);
    } catch (error) {
      localStorage.removeItem("token");
      navigagte("/login");
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  console.log(user);
  return (
    <div>
      {user && (
        <>
          <h1>Todo</h1>
        </>
      )}
    </div>
  );
};

export default Todo;
