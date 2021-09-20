export {};

enum PhotoOrientation{
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}

interface Entity {
    id:number;
    title:string;
}

interface Album extends Entity{
    // Copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity{
    // Copia de los atributos de Entity
    orientation: PhotoOrientation;
}


const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea officia eligendi magnam aut quis.'
}

const picture: Picture = {
    id:2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture;
newPicture.id = 3;
newPicture.title = 'Mensaje de Prueba';
newPicture.orientation = PhotoOrientation.Panorama;



console.log(album);
console.log(picture);
console.log(newPicture);