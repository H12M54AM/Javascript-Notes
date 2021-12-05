
let trees = ["oak", "spruce", "dark oak", "acacia"];
trees.push(["birch"]); //It literaly pushes "birch" into the array

console.log(trees);

/*-----------------------------------------------------------------------------------------*/

let numB = [1, 2, 3, 4, 5];
num = numB.pop(); //This takes the last element and puts it into an empty variable 

console.log(numB);
console.log(num);

/*-----------------------------------------------------------------------------------------*/

let Name = ["David", "Key", "L"];
emptyName = Name.shift(); //"shift" removes the first elememt and puts it into an empty variable

console.log(Name);
console.log(emptyName);

/*-----------------------------------------------------------------------------------------*/

let cars = ["S15", "RX7-FC", "Porche 918", "Tesla Roadster", "Dodge Demon"];

Garage = cars.shift();
cars.unshift(["Toyota Century"]); //Inserts an element to the first or 0 index


console.log(cars);
console.log(Garage);