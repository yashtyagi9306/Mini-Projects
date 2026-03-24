const feedback = document.getElementById("feedback");
const random = Math.floor(Math.random() * (10-1) + 1);

document.getElementById("guessBtn").addEventListener('click',function(){
    const userInput = parseInt(document.getElementById("guessInput").value);
    guessCheck(userInput);
})

function guessCheck(userInput){
    
    if(userInput < random ){
        feedback.textContent = "Too low, try agian!";
    }else if(userInput > random ){
        feedback.textContent = "Too high, try agian!";
    }else{
        feedback.textContent = "Bravo!, you guessed the number correct. "
    }
       
    
    
}