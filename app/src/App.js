import Header from "./components/Header";
import Todos from './components/Todos.jsx'
import {useState} from 'react'

const randomId = () => {
  return Math.floor(Math.random() * 100000);
};

const App = () => {
  const [items,setItems] = useState([])
  const handleAdd = ()=>{
    setItems([randomId(),...items])
  }
  return ( 
      <div >
        <button onClick={handleAdd} >Add</button>
        {
          items.map((item,index) => {
            return <input key={item} />
          })
        }
      </div>
   );
}
 
export default App;