// const car = {
//     name: 'Audi',
//     model: 'A8',
// }

// const obj = {
//     name:'John',
//     age: 30,
//     isMarried: false,
//     greet: function(){
//         console.log('hello !!')
//     },
//     address:{
//         city:'Delhi',
//         state:'Delhi',
//         pincode:'110001',
//     },
//     hobbies:['music','sports'],
//     someothercar:car
// }
// obj.greet()
// console.log(obj.hobbies)
// console.log(obj['hobbies'])

greet1('greet2',30)
function greet1(Name,age){
    console.log('hello '+Name+' your age is '+age)
}

greet2('greet1',30)
const greet2 = function(Name,age){
    console.log('hello '+Name+' your age is '+age)
}

