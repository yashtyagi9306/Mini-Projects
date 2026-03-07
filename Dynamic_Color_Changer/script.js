//here we have selected the elements and named them as elements

const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector('.btn2');
const btn3El = document.querySelector('.btn3');
const titleEl = document.querySelector('.title');
const bodyEl = document.querySelector('body');

console.log(btn1El,btn2El,btn3El,titleEl);

//now we are adding eventlisteners to them
btn1El.addEventListener('click',function(){
    bodyEl.style.backgroundColor =  'blue';
})

btn2El.addEventListener('click', ()=>{
    titleEl.style.fontSize = '95px';
})

btn3El.addEventListener('click', ()=>{
    titleEl.style.fontSize = "30px";
    bodyEl.style.backgroundColor = "";
})




