"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstname, isPro) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    remoteAlbum(album) {
        // Buscar el Objecto album
        const index = this.album.findIndex(a => a.id === album.id);
        let deletedAlbum;
        if (index >= 0) {
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deletedAlbum;
    }
}
exports.User = User;
