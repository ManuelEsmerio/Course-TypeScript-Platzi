export {};

enum PhotoOrientation{
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}


class Picture {
    // Propiedades
    id:number;
    title:string;
    orientation:PhotoOrientation;

    constructor(id:number, title:string, orientation:PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString():string{
        return `id: ${this.id} title: ${this.title} orientation: ${this.orientation}`;
    }
}

class Album {
    // Propiedades
    id:number;
    title:string;
    pictures:Picture[];

    constructor(id:number, title:string){
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    
    // Comportamiento
    addPicture(picture:Picture):void{
        this.pictures.push(picture);
    }
}

const album:Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1,'My Trip',PhotoOrientation.Landscape);

album.addPicture(picture);

console.log(album);
console.log(picture.toString());