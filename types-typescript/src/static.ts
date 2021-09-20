export {}

class Person {
    private id:number;
    private userName:string;
    private firstName:string;
    protected info:string;

    constructor(id:number, userName:string, firstName:string) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.info ='';
    }

    public static getName(value:string, value2:string) :string {
        return `${value} ${value2}`;
    }

}


// class name {
//     constructor(parameters) {
        
//     }
// }