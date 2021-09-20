// Void se usan en las funciones que no retornan ningun valor.


function getName(user:any) : void{
    let all: any = {
            'id' : user.id, 
            'name' : user.name, 
            'lastname' : user.lastname
        }
}

console.log(getName({id:1, name: 'Manuel', lastname: 'Esmerio Garcia'}));

// Tipo void como tipo de dato en la variable
let unusable : void;
// unusable = null;
// unusable = undefined;


// Tipo Never
function handleError(code:number, message:string) : never {
    throw new Error(`${code}. ${message}`);
}

try {
    console.log(handleError(404, 'Not Found'));
} catch (error) {
    
}
