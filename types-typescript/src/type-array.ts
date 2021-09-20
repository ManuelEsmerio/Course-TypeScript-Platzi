// Corchetes []

// Tipo Explicito
let users: string[];
users = ['Manuel', 'Saul', 'Ilse', 'Irene'];
// users = [1, 'Saul', true, 'Irene']; // Error 

let otherUsers = [1, 'Manuel Esmerio', 'Esmerio55', true]; // (string | number | boolean)
otherUsers = ['Manuel',25]; // Permite todos esos tipos de valor

let allUsers = ['Manuel', 'Ilse', 'Esli'];
// allUsers = [1, 'Manuel', true]; // Error


// Array<Tipo>
let pictures : Array<string>;
pictures = ['pictures1', 'pictures2', 'pictures3'];


// Accediendo a los valores en un Array
console.log(users[0]);