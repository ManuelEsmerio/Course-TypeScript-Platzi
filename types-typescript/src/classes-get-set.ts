export {};

enum PhotoOrientation{
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}

class Picture {
    // Propiedades
    private _id:number; // Es Igual al usar private id:number
    private _title:string; // Es Igual al usar private title:string
    private _orientation:PhotoOrientation; // Es Igual al usar private orientation:PhotoOrientation

    public constructor(id:number, title:string, orientation:PhotoOrientation){
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    // Comportamiento
    public toString():string{
        return `id: ${this._id} title: ${this._title} orientation: ${this._orientation}`;
    }

    public set id(id:number){
        this._id = id;
    }

    public get id(){
        return this._id;
    }

    public set title(title:string){
        console.log("Se modifico el title de la imagen");
        this._title = title;
    }

    public get title(){
        return this._title;
    }

    public set orientation(orientation:PhotoOrientation){
        this._orientation = orientation;
    }

    public get orientation(){
        return this._orientation;
    }
}

class Album {
    // Propiedades
    private _id:number;
    private _title:string;
    private _pictures:Picture[];

    public constructor(id:number, title:string){
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    public set id(id:number){
        this._id = id;
    }

    public get id(){
        return this._id;
    }

    public set title(title:string){
        console.log("Se modifico el title del album.");
        this._title = title;
    }

    public get title(){
        return this._title;
    }
    
    // Comportamiento
    public addPicture(picture:Picture):void{
        this._pictures.push(picture);
    }
}

const album:Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1,'My Trip',PhotoOrientation.Landscape);

album.addPicture(picture);
picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';

console.log(picture.id, picture.title, picture.orientation);
console.log(album.id, album.title);

console.log(album);
console.log(picture.toString());