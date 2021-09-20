// Type: object
let user : object;
user = {};

user = {
    id: 1,
    username: 'Esmerio55',
    firstname: 'Manuel Esmerio Garcia',
    isPro: true
}

console.log('user', user);

// Object vs object (Clase JS vs tipo TS)
const otherUser = {
    id: 1,
    username: 'Esmerio55',
    firstname: 'Manuel Esmerio Garcia',
    isPro: true
}
console.log('username', otherUser.username);

const isInstance = otherUser instanceof Object; // Clase object de Javascript

console.log(isInstance);
// 