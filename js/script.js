let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let rateEUR = 4.5541;
let rateUSD = 3.7737;
let rateGBP = 5.2755;
let rateCHF = 4.1257;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
    }
    resultElement.innerHTML = `${amount} PLN = ${result.toFixed(3)} ${currency}`;
});





