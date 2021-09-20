"use strict";
// <tipo> Angle Bracket syntax
let username;
username = 'Manuel Esmerio';
// TS confie en nosotros
let message = username.length > 5 ?
    `Welcome
username: ${username}
`
    :
        `
Username is too short
`;
console.log(message);
username = username.toLocaleUpperCase();
console.log(username);
