
const person = {
    firstName: 'Florian',
    lastName: 'PASTEUR',
    age: 23,
    phoneNumber: 123456
};

/*
const firstName = person.firstName;
const lastName = person.lastName;
*/

const {firstName: fN, lastName: lastName} = person;

const name = "Florian PASTEUR";

console.log({
    ...person,
  /*
   Equivalent
   firstName: person.firstName,
    lastName: person.lastName,
    age: person.age,
    */
    location: 'The Netherlands'
});

function sayHello({firstName, phoneNumber}) {
    console.log("Hello " + firstName, phoneNumber)
}

sayHello(person);

console.log(fN, lastName);

const array = [1, 2, 3, 4];

function sumFirstTwoElements([a, b, ...c]) {
    console.log(c);
    if (c.length > 1) {
        return  a*b;
    }
    return a * b + sumFirstTwoElements(c)
}

console.log(sumFirstTwoElements(array));

const pair = [2, 4, 6, 8];
const impair = [1, 3, 5, 9];

console.log([...pair, ...impair]);

console.log(...'My String'[5]);
