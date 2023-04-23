const cardNameInput = document.querySelector('#name') as HTMLInputElement
const cardName = document.querySelector('.name') as HTMLHeadingElement
const cardNumberInput = document.querySelector('#card-number') as HTMLInputElement
const cardNumber = document.querySelector('.card-number') as HTMLHeadingElement
const monthInput = document.querySelector('#month') as HTMLInputElement
const yearInput = document.querySelector('#year') as HTMLInputElement
const cvcInput = document.querySelector('#cvc') as HTMLInputElement
const month = document.querySelector('.mon') as HTMLHeadingElement
const year = document.querySelector('.yr') as HTMLHeadingElement
const cvc = document.querySelector('#output') as HTMLOutputElement




cardNameInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    cardName.innerText = target.value;
})

cardNumberInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    cardNumber.innerText = target.value;
})
monthInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    month.innerText = target.value;
})
yearInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    year.innerText = target.value;
})
cvcInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    cvc.innerText = target.value;
})