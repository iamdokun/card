// let cardButton = document.getElementById("btn");
// cardButton.addEventListener("click", cardFunction);

// let cardNumber = document.getElementById("cardNum").value;
// let masterCard = [53]

//     for(let card = cardNumber.lenght; card++;) {
//     function cardFunction () {
//     if(cardNumber[card].includes(masterCard)) {
//         console.log(`Master card: ${cardNumber}`);
    
//     } else if (cardNumber[card].includes(visaCard)) {
//         console.log(`Visa card: ${cardNumber}`);
    
//     } else if (cardNumber[card].includes(verveCard)) {
//         console.log(`Verve card: ${cardNumber}`);
    
//     } else {
//         console.log(`Unautorize Card, check with your bank`);
//     }

//     }
//     }
    
let cardButton = document.getElementById('btn');
let cardNumber =  document.getElementById('cardNum').value;
        console.log(cardNumber);
cardButton.addEventListener('click', cardFunction);



function cardFunction() {
    
    const firstFourDigits = cardNumber.slice(0,4);

    console.log(firstFourDigits);

if (firstFourDigits === '5399') {
    
    alert(`Master card: ${cardNumber}`);

} else if (firstFourDigits === '0234') {

    alert(`Visa card: ${cardNumber}`);

} else if (firstFourDigits === '9908') {

    alert(`Verve card: ${cardNumber}`);

} else {

    alert(`Unauthorized card, Check with your bank`);
}

}


