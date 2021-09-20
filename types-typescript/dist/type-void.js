"use strict";
// Void se usan en las funciones que no retornan ningun valor.
function getName(user) {
    let all = {
        'id': user.id,
        'name': user.name,
        'lastname': user.lastname
    };
}
console.log(getName({ id: 1, name: 'Manuel', lastname: 'Esmerio Garcia' }));
// Tipo void como tipo de dato en la variable
let unusable;
// unusable = null;
// unusable = undefined;
// Tipo Never
function handleError(code, message) {
    throw new Error(`${code}. ${message}`);
}
try {
    console.log(handleError(404, 'Not Found'));
}
catch (error) {
}
