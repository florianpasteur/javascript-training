// Basics JS


// Variables

// Old
myVar = 'Content';
var myOtherVar = 'Other Content';

// New
let myLetVar = 'some content';
const myConstVar = '';

myLetVar = 123;

// Types:

const myString = 'string'; // String
const myStringWithConstructor = new String(); // String
const myInteger = 123;  // Number
const myIntegerWithConstructor = new Number();  // Number
const myArray = []; // Array
const myArrayWithConstructor = new Array(); // Array
const myBoolean = true; // Boolean
const myBooleanWithConstructor = new Boolean(); // Boolean
const myObject = {}; // Object
const myObjectWithConstructor = new Object(); // Object


console.log(typeof myString);
console.log(myInteger instanceof Number);

// Objects

let person = {
    firstName: 'Florian',
    lastName: 'PASTEUR',
};

console.log(person.firstName, person.lastName, person.age,);

person.firstName = 'Rami';
person.lastName = 'JOUNI';

console.log(person)

person.brothers = [
    {
        firstName: 'Hussen',
        lastName: 'JOUNI',
    }
]

console.log(person);

const partOfName = 'lastName';
console.log(person[partOfName]);
console.log(person.brothers[0]);

// Operators

const a = 2;
const b = 3;

console.log(a + b);

const strA = 'A';
const strB = 'B';

console.log(strA + strB);

console.log(a + strB);

console.log(a + '2');

var c;
var d = null;

console.log(a + c);
console.log(strA + c + d);

// - + /

console.log(b - a);
console.log(a / b);
console.log(a * b);

// =
const e = 123;

// ==  ===

console.log(123 == 123);
console.log('myString' == 'myString');
console.log({} == {})
var samePerson = person;
console.log(person == samePerson);
console.log(0 == false);
console.log([] == false)
const myVar2 = [];

if (myVar2 === 0) {
    console.log("That's true");
}

// != !==

// Conditionals

// if

if (myVar2 === 0) {
    console.log("Do something");
} else {
    console.log("Do something else");
}

if (person) {
    console.log("Do something", person.firstName);
} else {
    console.log("Do something else");
}

// (BOOLEAN) ? TRUE : FALSE

/*
function ternary(condition, a, b) {
    if (condition) {
        return a
    } else {
        return b;
    }
}
*/

// prefer
const fullName = (!!person) ? person.firstName + person.lastName : 'Unknown Name';

// instead of
let fullNamee;
if (!!person) {
    fullNamee = person.firstName + person.lastName;
} else {
    fullNamee = 'Unknown Name';
}

// || &&

let lastName;
if (person && (person.lastName || person.firstName)) {
    lastName = person.lastName
}

person.firstName = '';

let partName = person.firstName || person.lastName;

console.log(partName);


// Functions

function sum(a, b) {
    // do something

    return a + b;
}

const diff = function (a, b) {
    return a - b;
}

//

const division = (a, b) => a / b;


console.log(sum(2, 3));
console.log(diff(2, 3));
console.log(division(2, 3));


function mainFunction() {
    const subArrowFunction = () => {

    };

    function subFunction() {

    };
    subFunction();
    subFunction();
    subFunction();
    subArrowFunction();
}

mainFunction();
// subFunction(); not possible
// subArrowFunction(); not possible

// IIFE

(function () {
    // Do something
})();

// Built-in function

// setTimeout();
// setInterval();

Math.pow(10, 3);

console.log();

function printName(name = 'Default name') {
    console.log(name.toUpperCase());
}

printName("pasteur");
printName()

function divide() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    //return a / b;
}

console.log(divide(10));


// Hoisting

function main() {
    var foo;
    var sayFoo;

    function sayBar() {
        return 'bar';
    }

    console.log(foo, sayBar(), sayFoo());
    foo = 'bar';

    sayFoo = () => {
        return 'Foo'
    }
    var myPerson = {
        firstName: 'Florian',
        age: 23
    };

    if (myPerson.age > 18) {
        const isMajor = true;
    } else {
        const isMajor = false;
    }

    let i = 0;
    i += 1;
    i += 1;
    i += 1;
    i = 'counter';

    const j = 0;

    const object = {

    };

    object.property = 'something';
}



