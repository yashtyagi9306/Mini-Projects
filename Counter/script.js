const counterEl = document.querySelector(".counter");
let count = 0;
// const counterEL = document.getElementById("counter");
const btn1El = document.querySelector('.increase');
const btn2El = document.querySelector('.decrease');
const btn3El = document.querySelector('.increase10');
const btn4El = document.querySelector('.reset');

btn1El.addEventListener('click',function(){
    
    count++;
   
    // counterEl.innerHTML = count;
    counterEl.textContent = count;
});

btn2El.addEventListener('click',function(){
    
    count--;
  
    counterEl.innerHTML = count;
    
});

btn3El.addEventListener('click',function(){
    
    count=count+10;
   
    counterEl.textContent = count;
});

btn4El.addEventListener('click',function(){
    
    count=0;
    
    counterEl.textContent = count;
});


//difference between innerhTML and textContent is that innerHTML allows tags to be placed in its value. For eg "<h1>100</h1>";