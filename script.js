/*

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

// greet1('greet2',30)
// function greet1(Name,age){
//     console.log('hello '+Name+' your age is '+age)
// }

// greet2('greet1',30)
// var greet2 = function(Name,age){
//     console.log('hello '+Name+' your age is '+age)
// }

// class Car {
//   age = 30;
//   adult = true;
//   constructor(brand, name) {
//     console.log(this);
//     // this.name = name
//     // this.brand = brand
//     // this.age = 22
//   }
//   greet() {
//     console.log("hello " + this.name + " your age is " + this.age);
//   }
// }

// function Bike(brand, name) {
//   this.name = name;
//   this.brand = brand;
// }

// const bike1 = new Bike('Ktm','Duke 390');
// console.log(bike1);

// const obj = {
//     name:'John',
//     age: 30,
// }

// const obj2 = obj
// obj.name = 'Doe'
// obj.age = 22

// console.log(obj2)

// // let a = 3
// // let b = a
// // a+=25

// // console.log(b)
// // console.log(a)
*/


// arr.pop()

// console.log(arr.length)

// forEach, map, filter, find , reduce, findIndex

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }
// const arr = ['John','Doe','Jane','Jack']

// const callbackFunc = function(potato,apples){
//     console.log(potato,apples)
// }

// arr.forEach(callbackFunc);

// for(let i = 0;i<arr.length;i++){
//     callbackFunc(arr[i],i)
// }

// const arr = [34,21,23]
// const newArr = []

// for(let i = 0;i<arr.length;i++){
//     newArr.push(arr[i]*19)
// }

// arr.forEach(function(item){
//     newArr.push(item*19)
// })


// const newArr2 = arr.map(function(item){
//     return item*19
// })

// console.log(newArr2)

// let res = 0
// for(let i = 0;i<arr.length;i++){
//     res+=arr[i]
// }
// console.log(res)

// const reduceFunction = function(previousValue,currentItem){
//     console.log(previousValue,currentItem)
//     return previousValue+currentItem
// }

// const res2 = arr.reduce(reduceFunction,0)
// console.log(res2)

const a = {
    name:'John',
    age: 30,
    isMarried: false,
    greet: function(){
        console.log('hello !!')
    }
}
const b = {}
// // for(let key in a){
// //     console.log(key)
// // }
// console.log(Object.keys(a))
// console.log(Object.values(a))

// const reduceFunction = function(previousValue,currentItem){
//     console.log(previousValue,currentItem)
//     previousValue[currentItem] = a[currentItem]
//     return previousValue
// }
// const fibonacci = []

// // Object.keys(a).reduce(reduceFunction,b)
// // console.log(b)
// Array(10).fill(0).reduce(function(prev,curr){
//     console.log(prev,curr)
//     fibonacci.push(prev)
//     return prev+curr
// },1)

// const fibonacci = [1,1]
// for(let i = 1;i<10;i++){
//  fibonacci.push(fibonacci[i]+fibonacci[i-1])
// }
// console.log(fibonacci)

const arr = [{name:'John',age:30},{name:'Doe',age:22},{name:'Jane',age:25},{name:'Jack',age:28}]

const findfn = function(item,index){
    if(item.name==='Jane'){
        return true
    }
}
const ele = arr.find(findfn)
console.log(ele)

// for(let i = 0;i<arr.length;i++){
//     const item = arr[i]
//     if(item.name==='Jane'){
//         console.log('Jane found')
//         break
//     }
// }