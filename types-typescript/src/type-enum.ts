// Enum
enum Photos{
    picture,
    picture1,
    picture2,
    picture3
}

const picture: Photos = Photos.picture;
console.log(picture);
console.log(Photos.picture1);
console.log(Photos[1]);

enum Semana {
    lunes = 'Monday',
    martes = 'Tuesday',
    miercoles = 'Wednesday',
    jueves = 'Thursday',
    viernes = 'Friday',
    sabado = 'Saturday',
    domingo = 'Sunday'
}

console.log(Semana.domingo);
console.log(Semana['lunes']);