import {useState} from 'react'
import Header from './components/Header';
import Todos from './components/Todos';

const randomid = () => {
  return Math.floor(Math.random() * 10000) + 1
}

const App = () => {
  const [todos, setTodos] = useState([])

  const handleAdd = (todo)=>{
    const newTodo = {id:randomid(), title:todo, completed:false}
    setTodos([...todos, newTodo])
  }

  const handleDelete = (id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  return ( 
    <div>
      <h1>todolist</h1>
      <Header handleAdd={handleAdd}/>
      <Todos handleDelete={handleDelete} todos={todos} />
    </div>
   );
}
 
export default App;