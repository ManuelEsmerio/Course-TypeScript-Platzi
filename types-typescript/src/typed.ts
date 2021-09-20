// Number
// Valor Explicito
let phone: number;
// Valor inferido
let phoneNumber = 3321305110;
// Numero Hexadecimal
let hex: number = 0xf00d;
// Numero Binario
let binary: number = 0b1010;
// Numero Octal
let octal: number = 0o744;

// Boolean
// Valor Explicito
let validate: boolean;
// Valor inferido
let isSuccess = false;
// isSuccess = 0;

// String
// Valor Explicito
let myName : string = "Manuel Esmerio Garcia";
// Valor inferido
let userName = "Esmerio55";

let allInfo : string = `
    Name: ${myName}
    Username: ${userName}
    Phone: ${phoneNumber}
    isSuccess: ${isSuccess}
`;


console.log(allInfo);
