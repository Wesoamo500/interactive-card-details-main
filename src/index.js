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
var continueBtn = document.querySelector('.continue-btn');
var confirmBtn = document.querySelector('.confirm');
cardNameInput.addEventListener('input', function (e) {
    var target = e.target;
    cardName.innerText = target.value;
});
cardNumberInput.addEventListener('input', function (e) {
    var target = e.target;
    cardNumber.innerText = target.value;
});
monthInput.addEventListener('input', function (e) {
    var _a, _b;
    var target = e.target;
    if (target.value.length > 2) {
        monthInput.classList.add("border-[#FF0000]", "focus:outline-[#FF0000]");
        (_a = document.querySelector('.mon-err2')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        month.innerText = "00";
    }
    else if (target.value.length <= 2) {
        monthInput.classList.remove("border-[#FF0000]", "focus:outline-[#FF0000]");
        (_b = document.querySelector('.mon-err2')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        month.innerText = target.value;
    }
});
yearInput.addEventListener('input', function (e) {
    var _a, _b;
    var target = e.target;
    if (target.value.length > 2) {
        yearInput.classList.add("border-[#FF0000]", "focus:outline-[#FF0000]");
        (_a = document.querySelector('.mon-err2')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        year.innerText = "00";
    }
    else if (target.value.length <= 2) {
        yearInput.classList.remove("border-[#FF0000]", "focus:outline-[#FF0000]");
        (_b = document.querySelector('.mon-err2')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        year.innerText = target.value;
    }
});
cvcInput.addEventListener('input', function (e) {
    var target = e.target;
    cvc.innerText = target.value;
});
function validate() {
    var cardName = cardNameInput.value.trim();
    var cardNum = cardNumberInput.value.trim();
    var mon = monthInput.value.trim();
    var year = yearInput.value.trim();
    var cvc = cvcInput.value.trim();
    validateName(cardName);
    validateCardNum(cardNum);
    validateMonth(mon);
    validateYear(year);
    validateCVC(cvc);
    if (validateName(cardName) && validateCardNum(cardNum) && validateMonth(mon) && validateYear(year) && validateCVC(cvc)) {
        return true;
    }
    return false;
}
function validateName(str) {
    var _a, _b;
    if (!str) {
        (_a = document.querySelector('.name-err')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        cardNameInput.classList.add("border-[#FF0000]");
        return false;
    }
    else {
        (_b = document.querySelector('.name-err')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        cardNameInput.classList.remove("border-[#FF0000]");
        return true;
    }
}
function validateCardNum(str) {
    var _a, _b, _c, _d;
    if (!str) {
        (_a = document.querySelector('.card-num-err2')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        cardNumberInput.classList.add("border-[#FF0000]");
        return false;
    }
    else {
        (_b = document.querySelector('.card-num-err2')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        cardNumberInput.classList.remove("border-[#FF0000]");
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var x = str_1[_i];
            var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (alphabets.toLowerCase().includes(x)) {
                (_c = document.querySelector('.card-num-err')) === null || _c === void 0 ? void 0 : _c.classList.remove("hidden");
                return false;
            }
        }
        (_d = document.querySelector('.card-num-err')) === null || _d === void 0 ? void 0 : _d.classList.add("hidden");
        return true;
    }
}
function validateMonth(str) {
    var _a, _b, _c, _d;
    if (!str) {
        (_a = document.querySelector('.mon-err')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        monthInput.classList.add("border-[#FF0000]");
        return false;
    }
    else {
        (_b = document.querySelector('.mon-err')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        monthInput.classList.remove("border-[#FF0000]");
        if (Number(str) > 12 || Number(str) < 1) {
            (_c = document.querySelector('.mon-err2')) === null || _c === void 0 ? void 0 : _c.classList.remove("hidden");
            monthInput.classList.add("border-[#FF0000]");
            return false;
        }
        (_d = document.querySelector('.mon-err2')) === null || _d === void 0 ? void 0 : _d.classList.add("hidden");
        return true;
    }
}
function validateYear(str) {
    var _a, _b;
    if (!str) {
        (_a = document.querySelector('.mon-err')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        yearInput.classList.add("border-[#FF0000]");
        return false;
    }
    else {
        (_b = document.querySelector('.mon-err')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        yearInput.classList.remove("border-[#FF0000]");
        return true;
    }
}
function validateCVC(str) {
    var _a, _b;
    if (!str) {
        (_a = document.querySelector('.cvc-err')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        cvcInput.classList.add("border-[#FF0000]");
        return false;
    }
    else {
        (_b = document.querySelector('.cvc-err')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        cvcInput.classList.remove("border-[#FF0000]");
        return true;
    }
}
confirmBtn.addEventListener('click', function () {
    confirmBtn.classList.add("opacity-50");
    setTimeout(function () {
        var _a, _b, _c;
        if (validate()) {
            (_a = document.querySelector('.form')) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
            (_b = document.querySelector('.next')) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
            continueBtn.classList.remove('opacity-50');
        }
        else {
            (_c = document.querySelector('.next')) === null || _c === void 0 ? void 0 : _c.classList.add("hidden");
        }
    }, 500);
});
continueBtn.addEventListener("click", function () {
    continueBtn.classList.add('opacity-50');
    setTimeout(function () {
        var _a, _b;
        (_a = document.querySelector('.form')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        (_b = document.querySelector('.next')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        confirmBtn.classList.remove('opacity-50');
        cardNameInput.value = "";
        cardNameInput.placeholder = "e.g Abdul Manan";
        cardName.innerHTML = "Abdul Manan";
        cardNumberInput.value = "";
        cardNumberInput.placeholder = "e.g 0000 0000 0000 0000";
        cardNumber.innerHTML = "0000 0000 0000 0000";
        monthInput.value = "";
        monthInput.placeholder = "MM";
        month.innerHTML = "00";
        yearInput.value = "";
        yearInput.placeholder = "YY";
        year.innerHTML = "00";
        cvcInput.value = "";
        cvcInput.placeholder = "e.g 123";
        cvc.innerHTML = "000";
    }, 500);
});
