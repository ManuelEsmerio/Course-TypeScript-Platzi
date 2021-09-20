export abstract class Item {

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