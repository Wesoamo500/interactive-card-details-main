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
const continueBtn = document.querySelector('.continue-btn') as HTMLButtonElement

const confirmBtn = document.querySelector('.confirm') as HTMLButtonElement;




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
   
    if(target.value.length > 2){
        monthInput.classList.add("border-[#FF0000]","focus:outline-[#FF0000]");
        document.querySelector('.mon-err2')?.classList.remove("hidden")
        month.innerText = "00"
    }else if(target.value.length<=2){
        monthInput.classList.remove("border-[#FF0000]","focus:outline-[#FF0000]");
        document.querySelector('.mon-err2')?.classList.add("hidden")
        month.innerText = target.value;
    }
})
yearInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    if(target.value.length > 2){
        yearInput.classList.add("border-[#FF0000]","focus:outline-[#FF0000]");
        document.querySelector('.mon-err2')?.classList.remove("hidden")
        year.innerText = "00"
    }else if(target.value.length<=2){
        yearInput.classList.remove("border-[#FF0000]","focus:outline-[#FF0000]");
        document.querySelector('.mon-err2')?.classList.add("hidden")
        year.innerText = target.value;
    }
    
})
cvcInput.addEventListener('input',(e:Event)=>{
    const target = e.target as HTMLInputElement;
    cvc.innerText = target.value;
})

function validate(){
    const cardName = cardNameInput.value.trim();
    const cardNum = cardNumberInput.value.trim();
    const mon = monthInput.value.trim();
    const year = yearInput.value.trim();
    const cvc = cvcInput.value.trim();
    validateName(cardName);
    validateCardNum(cardNum);
    validateMonth(mon)
    validateYear(year)
    validateCVC(cvc)
    
   if(validateName(cardName)&&validateCardNum(cardNum)&&validateMonth(mon)&&validateYear(year)&&validateCVC(cvc)){
    return true
   }
    return false
}

function validateName(str:string){
    if(!str){
        document.querySelector('.name-err')?.classList.remove("hidden")
        cardNameInput.classList.add("border-[#FF0000]")
        return false
    }else{
        document.querySelector('.name-err')?.classList.add("hidden")
        cardNameInput.classList.remove("border-[#FF0000]")
        return true
    }
}

function validateCardNum(str:string){
    if(!str){
        document.querySelector('.card-num-err2')?.classList.remove("hidden")
        cardNumberInput.classList.add("border-[#FF0000]")
        return false
    }else{
        document.querySelector('.card-num-err2')?.classList.add("hidden")
        cardNumberInput.classList.remove("border-[#FF0000]")
        for(const x of str){
            const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            if(alphabets.toLowerCase().includes(x)){
                document.querySelector('.card-num-err')?.classList.remove("hidden")
                return false
            }
        }
        document.querySelector('.card-num-err')?.classList.add("hidden")
        return true
    }
}

function validateMonth(str:string){
    if(!str){
        document.querySelector('.mon-err')?.classList.remove("hidden")
        monthInput.classList.add("border-[#FF0000]")
        return false
    }else{
        document.querySelector('.mon-err')?.classList.add("hidden")
        monthInput.classList.remove("border-[#FF0000]")
        if(Number(str)>12 || Number(str)<1){
            document.querySelector('.mon-err2')?.classList.remove("hidden")
            monthInput.classList.add("border-[#FF0000]")
            return false 
        }
        document.querySelector('.mon-err2')?.classList.add("hidden")
        return true
    }
}

function validateYear(str:string){
    if(!str){
        document.querySelector('.mon-err')?.classList.remove("hidden")
        yearInput.classList.add("border-[#FF0000]")
        return false
    }else{
        document.querySelector('.mon-err')?.classList.add("hidden")
        yearInput.classList.remove("border-[#FF0000]")
        return true
    }
}
function validateCVC(str:string){
    if(!str){
        document.querySelector('.cvc-err')?.classList.remove("hidden")
        cvcInput.classList.add("border-[#FF0000]")
        return false
    }else{
        document.querySelector('.cvc-err')?.classList.add("hidden")
        cvcInput.classList.remove("border-[#FF0000]")
        return true
    }
}


confirmBtn.addEventListener('click',()=>{
    confirmBtn.classList.add("opacity-50");
    setTimeout(()=>{
        if(validate()){
            document.querySelector('.form')?.classList.add("hidden")
            document.querySelector('.next')?.classList.remove("hidden")
            continueBtn.classList.remove('opacity-50')
        }else{
            document.querySelector('.next')?.classList.add("hidden")
        }
    },500)
    
})

continueBtn.addEventListener("click",()=>{
    continueBtn.classList.add('opacity-50')
    setTimeout(()=>{
        document.querySelector('.form')?.classList.remove("hidden");
        document.querySelector('.next')?.classList.add("hidden");
        confirmBtn.classList.remove('opacity-50')
    
        cardNameInput.value = "";
        cardNameInput.placeholder="e.g Abdul Manan"
        cardName.innerHTML="Abdul Manan"
    
        cardNumberInput.value = "";
        cardNumberInput.placeholder="e.g 0000 0000 0000 0000"
        cardNumber.innerHTML="0000 0000 0000 0000"
    
        monthInput.value = "";
        monthInput.placeholder="MM"
        month.innerHTML="00"
    
        yearInput.value = "";
        yearInput.placeholder="YY"
        year.innerHTML="00"
    
        cvcInput.value = "";
        cvcInput.placeholder="e.g 123"
        cvc.innerHTML="000"
    },500)
})