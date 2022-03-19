//Preforming a task
function greet(/*Parameter*/ name, lastName) {
    //The body of the function
    console.log("Hello, " + name + " " + lastName)
}

//Calculating a number 
function square(number) {
    return number*number;
}

squareAnswer = square(2); //part of the same 
console.log(squareAnswer) //thing

console.log(square(2));

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

let myArr = [1, 2, 3, 4, 5,];

console.log("Before: " + JSON.stringify(myArr));
console.log(nextInLine(myArr, 6));
console.log("After: " + JSON.stringify(myArr));

//-------------------------

function userInputs() {
    let answer = window.prompt("Whats your name? ")
    document.write("Cool. I'm " + answer + " too ");

    let age = window.prompt("How old are you? " + answer)
    document.write(" I'm also " + age + ", we must be twins!");
    return true;
}