import Footer from "./components/Footer"
import Header from "./components/Header"


const Content = ()=>{
  const tasks = ['task 1', 'task 2', 'task 3']
  return (
    <div>
      {
        tasks.map((task, index) => {
          return <p>{task}</p>
        })
      }
    </div>
  )
}

const App = () => {
  return ( 
    <div>
     <Header />
      <Content />
      <Footer />
    </div>
   );
}
 
export default App;