import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "Learn React",
          completed: false,
        },
        {
          id: 2,
          title: "Learn Node",
          completed: false,
        },
      ]);
    return(
        <TodoContext.Provider value={{todos,setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}