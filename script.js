const car = {
    name: 'Audi',
    model: 'A8',
}

const obj = {
    name:'John',
    age: 30,
    isMarried: false,
    greet: function(){
        console.log('hello !!')
    },
    address:{
        city:'Delhi',
        state:'Delhi',
        pincode:'110001',
    },
    hobbies:['music','sports'],
    someothercar:car
}

console.log(obj.hobbies)
console.log(obj['hobbies'])
