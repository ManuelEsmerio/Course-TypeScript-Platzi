// Null
// Typescript no permite otro tipo de dato que no sea null
let nullVariable: null;
// nullVariable = 1;

//  Typescript difiere que el valor es any no null
let otherVariable = null;
// otherVariable = 'Mensaje';

console.log(otherVariable);

// undefined
// Typescript no permite otro tipo de valor que no sea  undefined
let undefinedVariable : undefined;
// undefinedVariable = 1;


let otherUndefined = undefined;
otherVariable = 1;

console.log(otherVariable);


// null u undifined como subtipos
// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;