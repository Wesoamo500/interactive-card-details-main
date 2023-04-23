var cardNameInput = document.querySelector('#name');
var cardName = document.querySelector('.name');
var cardNumberInput = document.querySelector('#card-number');
var cardNumber = document.querySelector('.card-number');
var monthInput = document.querySelector('#month');
var yearInput = document.querySelector('#year');
var cvcInput = document.querySelector('#cvc');
var month = document.querySelector('.mon');
var year = document.querySelector('.yr');
var cvc = document.querySelector('#output');
cardNameInput.addEventListener('input', function (e) {
    var target = e.target;
    cardName.innerText = target.value;
});
cardNumberInput.addEventListener('input', function (e) {
    var target = e.target;
    cardNumber.innerText = target.value;
});
monthInput.addEventListener('input', function (e) {
    var target = e.target;
    month.innerText = target.value;
});
yearInput.addEventListener('input', function (e) {
    var target = e.target;
    year.innerText = target.value;
});
cvcInput.addEventListener('input', function (e) {
    var target = e.target;
    cvc.innerText = target.value;
});
