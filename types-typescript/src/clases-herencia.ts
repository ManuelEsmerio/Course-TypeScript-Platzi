export {};

enum PhotoOrientation{
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}

// SUPER Clase
abstract class Item {

    protected readonly _id:number;
    protected _title:string;

    constructor(id:number, title:string) {
        this._id = id;
        this._title = title;
    }

    public get id(){
        return this._id;
    }

    public set title(title:string){
        this._title = title;
    }

    public get title(){
        return this._title;
    }
}

class Picture extends Item{

    public static photoOrientation = PhotoOrientation;
    // Propiedades
    private _orientation:PhotoOrientation; // Es Igual al usar private orientation:PhotoOrientation

    public constructor(id:number, title:string, orientation:PhotoOrientation){
        super(id, title);
        this._orientation = orientation;
    }

    // Comportamiento
    public toString():string{
        return `
        id: ${this._id} 
        title: ${this._title} 
        orientation: ${this._orientation
        }`;
    }

    public set orientation(orientation:PhotoOrientation){
        this._orientation = orientation;
    }

    public get orientation(){
        return this._orientation;
    }
}

class Album extends Item{
    // Propiedades
    private _pictures:Picture[];

    public constructor(id:number, title:string){
        super(id, title);
        this._pictures = [];
    }
    
    // Comportamiento
    public addPicture(picture:Picture):void{
        this._pictures.push(picture);
    }
}

const album:Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1,'My Trip',PhotoOrientation.Landscape);

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