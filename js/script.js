{
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
    const formElement = document.querySelector(".js-form");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.5541;
        const rateUSD = 3.7737;
        const rateGBP = 5.2755;
        const rateCHF = 4.1257;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;

        }
    };

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);


        resultElement.innerHTML = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    });
}

