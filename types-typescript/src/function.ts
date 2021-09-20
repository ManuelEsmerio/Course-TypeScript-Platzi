export { };

// Crear fotografia
type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size?: SquareSize) {
    console.log('create picture:', title, date, size);
}

// createPicture('username','18-09-2021', '500x500');
// createPicture('username','18-09-2021');


const createPic = (title: string, date: string, size: SquareSize = '100x100'): object => (
    {
        title,
        date,
        size
    }
);


// console.log(createPic('Manuel', '12-09-2021'));


const handleError = (code: number, message: string): never | string => {
    if (message === 'error') {
        throw new Error(`Code: ${code}. An error has occurred. ${message}`);
    }
    else {
        return message;
    }
}

try {
    console.log(handleError(200, 'Procesos realizado con exito desde los parametros'));
    console.log(handleError(500, 'error'));
} catch (error) {
    console.log(error);
}