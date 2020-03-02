function vndToUsd(amountVnd) {
    let result = amountVnd / exchangeRate;
    result = Math.round(result * 100) / 100;
    return result;
}
function usdToVnd(amountUsd) {
    let result = amountUsd * exchangeRate;
    result = Math.round(result * 100) / 100;
    return result;
}
function validateAmount(input){
    console.log("actual input: "+parseInt(input, 10));
    console.log("type of input: " + typeof parseInt(input, 10));
    return isNaN(input);
}
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

let returnedFromFunctionCall;
let amountPrompt;

// const currencyChoice = prompt("Which currency would you like to convert from? (USD or VND)");
const currencyTo = prompt("Which currency would you like to convert USD to? (VND, KRW, IDR, & EUR");

const krw = 1191;
const vnd = 23208;
const idr = 14260;
const eur = 0.90;
let exchangeRate = vnd;
let exchangeSymbol = '';

switch(currencyTo) {
    case 'VND':
    case 'vnd':
        exchangeRate = vnd;
        exchangeSymbol = 'VND';
        break;
    case 'KRW':
    case 'krw':
        exchangeRate = krw;
        exchangeSymbol = 'KRW';
        break;
    case 'IDR':
    case 'idr':
        exchangeRate = idr;
        exchangeSymbol = 'IDR';
        break;
    case 'EUR':
    case 'eur':
        exchangeRate = eur;
        exchangeSymbol = 'EUR';
        break;
}



function convert() {
    // if(currencyChoice === "USD" || currencyChoice === "usd") {
    if(currencyTo === 'KRW' || currencyTo === 'krw' ||
       currencyTo === 'VND' || currencyTo === 'vnd' ||
       currencyTo === 'IDR' || currencyTo === 'idr' ||
       currencyTo === 'EUR' || currencyTo === 'eur') {
        amountPrompt = prompt("How much USD?");
        if(validateAmount(amountPrompt) === true) {
            alert("Not a valid number...");
        } else {
            returnedFromFunctionCall = usdToVnd(amountPrompt);
            alert("You converted from USD to "+exchangeSymbol+". Your " +
            +amountPrompt+ " in USD is " + 
            formatCurrency(exchangeSymbol, returnedFromFunctionCall) + " in "+exchangeSymbol);
        }
    //from vnd to usd
    // } else if (currencyChoice === "VND" || currencyChoice === "vnd") {
    //     amountPrompt = prompt("How much VND?");
    //     if(validateAmount(amountPrompt) === true) {
    //         alert("Not a valid number...");
    //     } else {
    //         returnedFromFunctionCall = vndToUsd(amountPrompt);
    //         alert("You converted from VND to USD. Your "
    //         +amountPrompt+ " in VND is " +
    //         formatCurrency(exchangeSymbol, returnedFromFunctionCall) 
    //         + " in USD");
    //     }
    } else {
        alert("Currency not recognized...");
    }
}
// alert("You converted from VND to USD. Your "+mountVNDprompt+ " in VND is " + returnedFromFunctionCall + "in USD");
convert();
