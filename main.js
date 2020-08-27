  let cardButton = document.getElementById('btn');

  let cardNumberDisplay = document.getElementById('displayCardType')
 
cardButton.addEventListener('click', cardFunction);

function cardFunction() {

    let cardNumber =  document.getElementById('cardNum').value;

    console.log({cardNumber});
    
    cardNumberDisplay.innerHTML = `Card Number: ${cardNumber}`;
    
    const firstSixDigits = cardNumber.slice(0,6);

if (firstSixDigits === '539983') {
    
    alert(`Master card: ${cardNumber}`);

} else if (firstSixDigits === '458587' || firstSixDigits === '467875' || firstSixDigits === '496021') {

    alert(`Visa card: ${cardNumber}`);

} else if (firstSixDigits === '650002' || firstSixDigits === '650003' || firstSixDigits === '650004') {

    alert(`Verve card: ${cardNumber}`);

} else if (firstSixDigits === '') {

    alert(`Enter Card Number`);

} else {

    alert(`Unauthorized card, Check with your bank`);

}

}


