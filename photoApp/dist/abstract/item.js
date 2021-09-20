"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
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
exports.Item = Item;
