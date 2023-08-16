import {useState} from 'react'
import Header from './components/Header';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
  ])
  return ( 
    <div>
      <h1>todolist</h1>
      <Header/>
      <Todos greet={()=>console.log('hi')} todos={todos} />
    </div>
   );
}
 
export default App;