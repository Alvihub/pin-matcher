function getPin(){
    const pin =  genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('ahe ny',pin);
        return getPin();
    }
}
function genaratePin(){
  const random =  Math.round(Math.random()*10000);
  return random;
}
document.getElementById('genarate-pin').addEventListener('click',function(){
   const pin = getPin();
//    disply pin in the pin input
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;
})

document.getElementById('calculator-button').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        console.log(number)
        if(number === 'C'){
            typeNumberField.value='';
        }
        else if(number === '<'){
        const breakNumber = previousTypeNumber.split('');
          breakNumber.pop();
        const reJoinNumber = breakNumber.join('');
        typeNumberField.value = reJoinNumber;
        }
    }
    else{
         const newTypeNumber = previousTypeNumber + number;
         typeNumberField.value = newTypeNumber
    }
})
document.getElementById('verify-btn').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typeNumberField = document.getElementById('typed-number');
    const currentTypeNumber = typeNumberField.value;
    const pinSuccessMessase = document.getElementById('btn-success');
    const pinFailureMessase = document.getElementById('btn-failure');
    if(currentPin === currentTypeNumber){
        pinSuccessMessase.style.display = 'block';
        pinFailureMessase.style.display = 'none';
    }
    else{
        pinFailureMessase.style.display = 'block';
        pinSuccessMessase.style.display = 'none'
    }
})
const product = 5; const price = "7"; const subTotal = product * price; const tax = subTotal/10; const total = subTotal + tax; console.log(total)