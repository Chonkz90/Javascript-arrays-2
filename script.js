/* Array Methods */
/*
const fruitBowl = ["Orange", "Banana", "Apple", "Kiwi"];
console.log (fruitBowl);
console.log (fruitBowl.toString());

// .push legger til et element på slutten i en array
fruitBowl.push("Mango");
console.log(fruitBowl);

// .unshift legger til et element på starten i en array
fruitBowl.unshift("Pineapple");
console.log (fruitBowl);

// .pop fjerner elementet på slutten i en array
fruitBowl.pop();
fruitBowl.pop();
console.log(fruitBowl);

// .shift fjerner det første elementet i en array
fruitBowl.shift();
console.log(fruitBowl);
*/



/*

function createFruitBowl(action) {
    const inputFruit = document.querySelector("#inputFruit").value;
    console.log(inputFruit);

    const fruitBowl = [];

    if (action === "fruitPush") {
        fruitBowl.push()
    } else {
        console.log("Something went wrong!")
    }
}

*/

const fruitPush = document.querySelector("#fruitPush");
const fruitPop = document.querySelector("#fruitPop");
const fruitUnshift = document.querySelector("#fruitUnshift")
const fruitShift = document.querySelector("#fruitShift")

fruitPush.addEventListener("click", createFruitBowl);
fruitPop.addEventListener("click", createFruitBowl);
fruitUnshift.addEventListener("click",createFruitBowl);
fruitShift.addEventListener("click", createFruitBowl);

console.log (fruitBowl);