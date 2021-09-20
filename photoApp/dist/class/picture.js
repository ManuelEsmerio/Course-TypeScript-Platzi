"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const photoOrientation_1 = require("../enum/photoOrientation");
const item_1 = require("../abstract/item");
class Picture extends item_1.Item {
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
exports.Picture = Picture;
Picture.photoOrientation = photoOrientation_1.PhotoOrientation;
