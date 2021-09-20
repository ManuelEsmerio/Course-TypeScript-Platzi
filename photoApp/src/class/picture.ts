import { PhotoOrientation } from '../enum/photoOrientation'
import { Item } from '../abstract/item'

export class Picture extends Item{

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