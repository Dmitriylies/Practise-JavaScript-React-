'Use strict';
const btns = document.querySelectorAll('button') ;
const wrap = document.querySelector('.wrapper');


wrap.addEventListener('click', (e)=> {
   if (e.target && e.target.tagName == "BUTTON") {
       console.log('!');
       
   }
    
});