const cardNameInput = document.querySelector('#name') as HTMLInputElement
const cardName = document.querySelector('.name') as HTMLHeadingElement
const cardNumberInput = document.querySelector('#card-number') as HTMLInputElement
const cardNumber = document.querySelector('.card-number') as HTMLHeadingElement



cardNameInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    cardName.innerText = target.value;
})

cardNumberInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    cardNumber.innerText = target.value;
})