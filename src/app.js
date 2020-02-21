const weightInKg = document.querySelector("#weight");
const weightInPound = document.querySelector("#weight-pound");
const weightInOunce = document.querySelector("#weight-ounce");
const weightInGrams = document.querySelector("#weight-grams");

let weightInKgValue = 0;
let node;
let textNode;
weightInKg.addEventListener('input', function(e) {
    console.log(e.target.value);
    weightInKgValue = e.target.value;
    
    //for pounds
    weightInPound.textContent = weightInKgValue * 2.20462;

    // for ounce
    weightInOunce.textContent = weightInKgValue * 35.274;

    // //for grams
    weightInGrams.textContent = weightInKgValue * 1000;
});