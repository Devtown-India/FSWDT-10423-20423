const response = axios.get('https://jsonplaceholder.typicode.com/todos')
console.log(response)

setTimeout(()=>{
    console.log(response)
},1000)