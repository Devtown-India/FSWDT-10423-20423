const body = document.querySelector('body');
const textbox = document.querySelector('h1 span');
const heading = document.querySelector('h1');

let count = 0;
heading.addEventListener('click',()=>{
    console.log("You clicked")
    textbox.innerText = ++count;
})