const heading = document.createElement('h1')
heading.innerHTML = '0'
let timer = setInterval(()=>{
  heading.innerHTML = ++count;
},1000)
let count = 0

const stop = document.createElement('button')
stop.innerHTML = 'Stop'
document.body.append(stop)

stop.addEventListener('click',()=>{
    clearInterval(timer)
})
document.body.append(heading)


