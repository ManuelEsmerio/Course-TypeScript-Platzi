import { Picture } from './picture'
import { Item } from '../abstract/item'

export class Album extends Item{
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