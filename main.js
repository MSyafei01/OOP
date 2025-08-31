// main.js
import unique from '..OOP/utils.mjs';
import { splitString } from '..OOP/utils.mjs';

document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("inputString");
const btn = document.getElementById("processBtn");
const resultArray = document.getElementById("resultArray");
const resultUnique = document.getElementById("resultUnique");

    btn.addEventListener("click", () => {
    const str = input.value;
    const array = splitString(str);
    const uniqueArray = unique(array);

    resultArray.textContent = `Array: [ ${array.join(", ")} ]`;
    resultUnique.textContent = `Unique: [ ${uniqueArray.join(", ")} ]`;
});
});
