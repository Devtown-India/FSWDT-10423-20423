const ul = document.createElement("ul");
document.body.appendChild(ul);

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(data=>{
//   data.forEach(todo=>{
//     const li = document.createElement('li')
//     li.innerHTML = todo.title
//     ul.appendChild(li)
//   })
// })

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }finally{
    console.log('finally')
  }
};

fetchData();
