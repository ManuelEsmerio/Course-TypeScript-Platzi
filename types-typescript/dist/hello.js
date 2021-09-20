"use strict";
var hello = "Hola desde TS";
console.log(hello);
const allName = (name, lastName) => {
    return `${name} ${lastName}`;
};
const example = (a, b) => {
    return a + b;
};
console.log(allName('Manuel', 'Esmerio Garcia'));
console.log(example(150, 2850));
