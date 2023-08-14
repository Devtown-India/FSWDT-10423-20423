const Header = ()=>{
  return <h1>Task List</h1>
}

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

const Footer = ()=>{
  const currentYear = new Date().getFullYear()
  return <p>Footer {currentYear}</p>
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