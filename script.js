
const form = document.querySelector('#formid')
const inpbtn = document.querySelector('#inp')
const result = document.querySelector('#result')
const submitbtn = document.querySelector('#submitbtn')
const startgamebtn = document.querySelector('#startgamebtn')

const allGuessesArry = []
let computerRondomNumber = Math.round(Math.random()*100)

form.addEventListener('submit',(e) =>{
  e.preventDefault()
  const inputValue = parseInt(inpbtn.value)
  if(inputValue > computerRondomNumber){
    result.innerText = 'Too High';

    setTimeout(()=>{
      result.remove()
    },3000);
    

  }else if(inputValue < computerRondomNumber){
      result.innerText = 'Too Low';

    setTimeout(()=>{
          result.remove()
        },3000);
        
    }else{
    
    result.innerText = 'To Jeet Gaya🎉';
    submitbtn.disabled =  true;
    startgamebtn.disabled = false ;
    
  }
  allGuessesArry.push(inputValue)
  allGuesses.innerText = 'Your Guesses: '  + allGuessesArry.join(' , ')
//   form.reset()
   inpbtn.value = '';
})

startgamebtn.addEventListener('click',()=>{
    result.innerText = '';
    allGuesses.innerText = '';
    submitbtn.disabled = false ;
    startgamebtn.disabled =  true;
    let computerRondomNumber = Math.round(Math.random()*100)
})
