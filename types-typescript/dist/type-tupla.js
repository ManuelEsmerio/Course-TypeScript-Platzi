"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users;
users = [1, 'Esmerio55'];
console.log('users', users);
console.log('id', users[0]);
console.log('username', users[1]);
// Tupla que contenga varios valores
let userInfo;
userInfo = [2, 'Manuel', true, 'Esmerio', 'Garcia'];
console.log('userInfo', userInfo);
// Arreglo de tuplas
let array = [];
array.push([1, 'Esmerio55', '12345']);
array.push([2, 'Esmerio65', '12345']);
array.push([3, 'Esmerio65', '12345']);
console.log('array', array);
// uso de funciones con nuestras tuplas
array[2]['1'] = array[2]['1'].concat('001');
console.log('array', array);
