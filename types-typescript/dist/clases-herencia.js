"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
// SUPER Clase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `
        id: ${this._id} 
        title: ${this._title} 
        orientation: ${this._orientation}`;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    // Comportamiento
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'My Trip', PhotoOrientation.Landscape);
album.addPicture(picture);
// picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
// console.log(picture.id, picture.title, picture.orientation);
// console.log(album.id, album.title);
// console.log(album);
// console.log(picture.toString());
// const item = new Item(1, 'Test title');
// console.log('item', item);
// Static Picture
console.log('photoOrientation', Picture.photoOrientation.Landscape);
// Modo lectura 
console.log(picture.id);
