const heading = document.querySelector('h1')
const body = document.querySelector('body')
const content = document.querySelector('p')


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
let count = 0;

const log = ()=>{
   heading.innerHTML=count++
}



setInterval(()=>{
var randomColor = Math.floor(Math.random()*16777215).toString(16);

    body.style=`
        background:#${randomColor};
        `
},1000)