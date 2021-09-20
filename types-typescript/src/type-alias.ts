export {};
// Alias
type idUser = number | string;
type returnString = string;
let idUser: idUser;
idUser = 10;
idUser = '10';

// Buscar username pot id
const getUsernameById = (id: idUser) :returnString => {
    return 'Manuel Esmerio';
}