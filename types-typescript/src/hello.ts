var hello: string = "Hola desde TS";
console.log(hello);


const allName = (name:string, lastName:string) : string => {
    return `${name} ${lastName}`;
}

const example = (a:number, b: number) : number => {
    return a + b;
}

console.log(allName('Manuel', 'Esmerio Garcia'));
console.log(example(150, 2850));