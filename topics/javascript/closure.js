


function sayWelcome(welcomeMessage) {
    return function (name) {
        return welcomeMessage + ' ' + name;
    }
}

function sayWelcome2param(welcomeMessage, name) {
        return welcomeMessage + ' ' + name;
}

const sayWelcomeEnglish = sayWelcome('Welcome');
const sayWelcomeFrench = sayWelcome('Bienvenu');

console.log(sayWelcomeEnglish('Marc'));
console.log(sayWelcomeEnglish('Benoit'));

console.log(sayWelcomeFrench('Marc'));
console.log(sayWelcomeFrench('Benoit'));



console.log(sayWelcome2param('Welcome', 'Benoit'));

console.log(sayWelcome('Welcome')('Benoit'));

console.log(sayWelcome2param('Welcome', 'Marc'));

function sum(a) {
    return function (b) {
        return a + b;
    }
}


const add2 = sum(2);

console.log(add2(3));
console.log(add2(5));
