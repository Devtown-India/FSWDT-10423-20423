import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import {Toaster} from 'react-hot-toast'

const App = () => {
  return ( 
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
   );
}
 
export default App;