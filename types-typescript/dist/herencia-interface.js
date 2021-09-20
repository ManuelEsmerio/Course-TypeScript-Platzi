"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 1,
    title: 'Meetups',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea officia eligendi magnam aut quis.'
};
const picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};
let newPicture = {};
newPicture.id = 3;
newPicture.title = 'Mensaje de Prueba';
newPicture.orientation = PhotoOrientation.Panorama;
console.log(album);
console.log(picture);
console.log(newPicture);
