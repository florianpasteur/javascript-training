function Person(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.sayMyName = function () {
        return this.firstName + ' ' + this.lastName;
    }

}

const florian = new Person('Florian', 'PASTEUR', 23);
const rami = new Person('Rami', 'JOUNI', 24);

console.log(florian instanceof Person);
console.log(florian.sayMyName());
console.log(rami.sayMyName());


Person.prototype.howOldAreYou = function () {
    return this.age;
};

Number.prototype.toEuro = function () {
    return this.toString() + ' e';
}


console.log((24).toEuro());

console.log(rami.howOldAreYou());

class Personn {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }

    sayMyName() {
        return this.fullName;
    }
}

new Personn('Florian', 'PASTEUR');

