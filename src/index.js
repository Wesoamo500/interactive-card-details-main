var cardNameInput = document.querySelector('#name');
var cardName = document.querySelector('.name');
var cardNumberInput = document.querySelector('#card-number');
var cardNumber = document.querySelector('.card-number');
cardNameInput.addEventListener('input', function (e) {
    var target = e.target;
    cardName.innerText = target.value;
});
cardNumberInput.addEventListener('input', function (e) {
    var target = e.target;
    cardNumber.innerText = target.value;
});
