import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import {Toaster} from 'react-hot-toast'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const App = () => {
  return ( 
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
   );
}
 
export default App;