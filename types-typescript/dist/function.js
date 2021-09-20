"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    console.log('create picture:', title, date, size);
}
// createPicture('username','18-09-2021', '500x500');
// createPicture('username','18-09-2021');
const createPic = (title, date, size = '100x100') => ({
    title,
    date,
    size
});
// console.log(createPic('Manuel', '12-09-2021'));
const handleError = (code, message) => {
    if (message === 'error') {
        throw new Error(`Code: ${code}. An error has occurred. ${message}`);
    }
    else {
        return message;
    }
};
try {
    console.log(handleError(200, 'Procesos realizado con exito desde los parametros'));
    console.log(handleError(500, 'error'));
}
catch (error) {
    console.log(error);
}
