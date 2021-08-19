//Variable scopes


var counter;

function increase(){
var counter = 10;
}


for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);



for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);


//Creating global properties

var counter = 0;
console.log(window.counter); //  0

let counter = 0;
console.log(window.counter); // undefined


//Redeclaration

var counter = 10;
var counter;
console.log(counter);

let counter = 10;
let counter;