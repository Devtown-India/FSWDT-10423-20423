const heading = document.querySelector('h1')
const body = document.querySelector('body')
const content = document.querySelector('p')
// const todos = ['task 1','task 2','task 3']
const list = document.querySelector('ul')
const input = document.querySelector('input')

// todos.forEach((todo)=>{
    // const li = document.createElement('li')
    // li.innerHTML=todo
    // console.log(li)
    // list.appendChild(li)    
// })

const handleClick = ()=>{
    const data = input.value
    if(data===''){
        return alert('Please enter a value')
    }
    console.log(input.value)
    const li = document.createElement('li')
    li.innerHTML=input.value
    console.log(li)
    list.appendChild(li)   
}


// const li = document.createElement('li')
// const textInsideli = document.createTextNode('task 4')
// li.appendChild(textInsideli)
// console.log(textInsideli)
// // li.innerHTML='task 4'
// console.log(li)


// heading.innerHTML = `
//     <span style="color: red">Hello</span> World!
// `
// content.style = `
//     background:#f1f1f1;
//     padding:10px;
//     color:blueviolet;
// `
// // console.log(heading.innerHTML)
// // console.log(heading.textContent)
// let count = 0;

// const log = ()=>{
//    heading.innerHTML=count++
// }



// setInterval(()=>{
// var randomColor = Math.floor(Math.random()*16777215).toString(16);

//     body.style=`
//         background:#${randomColor};
//         `
// },1000)