const message = document.querySelector('.message')
const button = document.querySelector('button')
const input = document.querySelector('input')

const checkPallindrome = ()=>{
  const word = input.value
  const reverseWord = word.split('').reverse().join('')
  if(word === reverseWord){
    message.innerText = `${word} is a pallindrome`
  }else{
    message.innerText = `${word} is not a pallindrome`
  }
}

button.addEventListener('click', checkPallindrome)