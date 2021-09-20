import { Album } from './album'

export class User {

    private readonly id:number;
    private username:string;
    private firstname:string;
    private isPro :boolean;
    private album : Album[];

    constructor(id:number, username:string, firstname:string, isPro:boolean) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.isPro = isPro;
        this.album = [];
    }

    addAlbum(album:Album) : void {
        this.album.push(album);
    }

    remoteAlbum(album: Album): Album | undefined {
        // Buscar el Objecto album
        const index = this.album.findIndex( a => a.id === album.id);
        let deletedAlbum: Album | undefined;
        if(index >= 0){
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        
        return deletedAlbum;
    }
}