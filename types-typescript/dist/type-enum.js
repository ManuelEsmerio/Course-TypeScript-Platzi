"use strict";
// Enum
var Photos;
(function (Photos) {
    Photos[Photos["picture"] = 0] = "picture";
    Photos[Photos["picture1"] = 1] = "picture1";
    Photos[Photos["picture2"] = 2] = "picture2";
    Photos[Photos["picture3"] = 3] = "picture3";
})(Photos || (Photos = {}));
const picture = Photos.picture;
console.log(picture);
console.log(Photos.picture1);
console.log(Photos[1]);
var Semana;
(function (Semana) {
    Semana["lunes"] = "Monday";
    Semana["martes"] = "Tuesday";
    Semana["miercoles"] = "Wednesday";
    Semana["jueves"] = "Thursday";
    Semana["viernes"] = "Friday";
    Semana["sabado"] = "Saturday";
    Semana["domingo"] = "Sunday";
})(Semana || (Semana = {}));
console.log(Semana.domingo);
console.log(Semana['lunes']);
