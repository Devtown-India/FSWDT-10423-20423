const add = (...rest)=>rest.reduce((a,b)=>a+b,0);

const multiply = (...rest)=>rest.reduce((a,b)=>a*b,1);

module.exports = {
    add,
    multiply
}

