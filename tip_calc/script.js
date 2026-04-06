function calculateTip(){
    const billAmount = parseFloat(document.getElementById("bill").value);
    const serviceQuality = parseFloat(document.getElementById("service").value);
    const numberOfPeople = parseFloat(document.getElementById("people").value);

    if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please ennter a valid bill amount.");
    return;
    }   
    if(numberOfPeople<1){
        alert("Number of people invalid.");
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / numberOfPeople;
    const tipPerPerson = tipAmount / numberOfPeople;

    document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`
    document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById("perPerson").textContent = `$${perPerson.toFixed(2)}`;
    document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
    
    const allEls = document.querySelectorAll("input, select").forEach((element) => {
        element.addEventListener("input",calculateTip);
        
    })
}




