const body = document.querySelector('body');
const textbox = document.querySelector('h1 span');
const heading = document.querySelector('h1');
const input = document.querySelector('input');

window.addEventListener('focus',(e)=>{
    console.log('tab change detected')
})
window.addEventListener('blur',(e)=>{
    console.log('blur change detected')
})

window.addEventListener('scroll',(e)=>{
    console.log('scroll detected',window.scrollY)
})


// let count = 0;
// heading.addEventListener('click',(event)=>{
//     console.log(event)
//     textbox.innerText = ++count;
// })

// body.addEventListener('mousemove',(event)=>{
//     console.log({
//         x: event.clientX,
//         y: event.clientY
//     })
// })
