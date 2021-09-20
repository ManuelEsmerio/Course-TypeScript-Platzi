"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const item_1 = require("../abstract/item");
class Album extends item_1.Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    // Comportamiento
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
exports.Album = Album;
