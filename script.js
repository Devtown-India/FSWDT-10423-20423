// const response = axios.get('https://jsonplholder.typicode.com/todos')
// console.log(response)

// response
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log('do something')})


/*
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>{
  console.log(response)
  const data = response.json()
  data.then(newData=>{console.log(newData)})
})
*/

const ul = document.createElement('ul')
document.body.appendChild(ul)

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>{
  data.forEach(todo=>{
    const li = document.createElement('li')
    li.innerHTML = todo.title
    ul.appendChild(li)
  })
})
.catch(err=>console.log(err))