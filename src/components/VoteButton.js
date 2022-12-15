import React from 'react'
// import VoteBut from '../css/VoteBut.css'

// let votebtn = document.querySelector('#votebtn');
// let input1 = document.querySelector('#input1');

// votebtn.addEventListener('onClick', ()=>{
//   input1.value =parseInt(input1.value) + 1;
//   input1.style.color = "#12ff00";
// })

let counter = 0;  

function upvote() {
counter ++;
document.getElementById('imput1').innerHTML = counter;
  return (
    <div className='voting' >
    <button id='votebtn' onClick={upvote()}> Vote </button>
<input type="number" id='imput1' value={0} name ="" />  
    
    </div>
  )
}

export default upvote;