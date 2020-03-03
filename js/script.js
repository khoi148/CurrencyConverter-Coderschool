let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton');
let resultArea = document.getElementById('resultArea');
let currency1 = document.getElementById('currency1');
let currency2 = document.getElementById('currency2');

convertButton.addEventListener('click', convert);
// convertButton.addEventListener("mouseover", mouseoverFunction);
// convertButton.addEventListener("mouseout", mouseoutFunction);


function convert(){
    let amount = amountInput.value;
    let rate = getRate(currency1.value, currency2.value);
    // let rate = callApi();
    let result = amount * rate;
    
    initialAmount = formatCurrency(currency1.value.toUpperCase(), amountInput.value); 
    result = formatCurrency(currency2.value.toUpperCase(), result);
    resultArea.innerHTML = initialAmount+` in `+currency2.value.toUpperCase()+` is: `+ result;
}

function getRate(from, to) {
    //get conversion rate with two currencies
    let result = currencies[from][to];
    return result;
}
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}
function mouseoverFunction() {
    resultArea.style.color = "red";
}
function mouseoutFunction() {
    resultArea.style.color="blue";
}

//API functions to use to get a realtime exchange rate. Given by https://free.currconv.co. 
//Not free, so API doesn't work after 5 tries
/*
async function callApi() {
    let currRate = `${currency1.value.toUpperCase()}_${currency2.value.toUpperCase()}`; //"USD_VND";
    let url = `https://free.currconv.com/api/v7/convert?q=${currRate}&compact=ultra&apiKey=7d53f3531d6ca848b188`;
    let result = await fetch(url);
    let json = await result.json();
    updateResults(json);
    console.log(json[currRate]);
    return json[currRate];
}

function updateResults(response) {
  console.log(response);
} */

//Object Exchange Rates

const usd = {
    krw: 1194.56,
    idr: 14209.55,
    eur: 0.90,
    vnd: 23214.41,
    usd: 1
}
const krw = {
    krw: 1,
    idr: 11.90,
    eur: 0.00075,
    vnd: 19.44,
    usd: 0.00084
}
const eur = {
    krw: 1329.54,
    idr: 15835.25,
    eur: 1,
    vnd: 25845.88,
    usd: 1.11
}
const vnd = {
    krw: 0.051,
    idr: 0.61,
    eur: 0.000039,
    vnd: 1,
    usd: 0.000043
}
const idr = {
    krw: 0.084,
    idr: 1,
    eur: 0.000063,
    vnd: 1.63,
    usd: 0.000070
}
//Object that holds references/keys to other currencies
const currencies = {
    krw,
    idr,
    eur,
    vnd,
    usd
}
