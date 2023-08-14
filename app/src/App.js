const App = () => {

  const tasks = ['task 1', 'task 2', 'task 3']
  const age = 10

  return ( 
    <div>
      <h1>Task List</h1>
      {age}
      {
        tasks.map((task, index) => {
          return <p>{task}</p>
        })
      }
    </div>
   );
}
 
export default App;