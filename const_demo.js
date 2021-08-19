//const CONSTANT_NAME = value;


let a = 10;
a = 20;
a = a + 5;
console.log(a);

const RATE = 0.1;
//RATE = 0.2; 

//const RED;


// JavaScript const and Objects

const person = { age: 20 };
person.age = 30;
console.log(person.age); 


// const person = Object.freeze({age: 20});
// person.age = 30; // TypeError


const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});


company.address.city = 'Dhaka';
company.address.country = 'Bangladesh';

//console.log(company);


// JavaScript const and Arrays

const colors = ['red'];

colors.push('green');
colors.push('Blue');

console.log(colors);


// JavaScript const in a for loop


let scores = [75,85,95];

for(let score of scores){
console.log(score);
}

for (const score of scores) {
    console.log('using const ' + score);
}

for (const i = 0; i < scores.length; i++) { // TypeError
    console.log(scores[i]);
}


