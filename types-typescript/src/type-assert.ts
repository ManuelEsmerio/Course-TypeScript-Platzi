// <tipo> Angle Bracket syntax
let username: any;
username = 'Manuel Esmerio';

// TS confie en nosotros
let message: string = (<string>username).length > 5 ?
    `Welcome
username: ${username}
`
    :
    `
Username is too short
`

console.log(message);

username = (username as string).toLocaleUpperCase();

console.log(username);