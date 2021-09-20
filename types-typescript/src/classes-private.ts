export {};

enum PhotoOrientation{
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}


class Picture {
    // Propiedades
    private id:number;
    private title:string;
    private orientation:PhotoOrientation;

    public constructor(id:number, title:string, orientation:PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString():string{
        return `id: ${this.id} title: ${this.title} orientation: ${this.orientation}`;
    }

    public SetId(id:number):void{
        this.id = id;
    }

    public GetId():number{
        return this.id;
    }
}

class Album {
    // Propiedades
    private id:number;
    private title:string;
    private pictures:Picture[];

    public constructor(id:number, title:string){
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    
    // Comportamiento
    public addPicture(picture:Picture):void{
        this.pictures.push(picture);
    }
}

const album:Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1,'My Trip',PhotoOrientation.Landscape);

album.addPicture(picture);

console.log(picture.GetId());
picture.SetId(55);
console.log(picture.GetId());


// console.log(album);
// console.log(picture.toString());