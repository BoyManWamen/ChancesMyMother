const value = document.getElementById("value");
const submit = document.querySelector('.submit');
const inputs = document.querySelectorAll('.input');
const error = document.getElementById("error");
const danny = document.getElementById("danny");

let chances = 0;

submit.addEventListener("click", function () {
    for (let input of inputs) {
        if (input.value.length == 0) {
            error.style.color = "red";
            error.textContent = "ERROR: PLEASE FILL IN ALL OF THE INPUTS";
            break;
        }
        else {
            chances = Math.random() * 100;
            value.textContent = ("You have a " + String(Math.round(chances)) + "%" + " chance of attracting my mother.");
        }
    }
});
danny.addEventListener("click", function () {
    value.textContent = ("You have a 95% chance of attracting my mother.");
});
