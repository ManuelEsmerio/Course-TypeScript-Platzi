"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(id, userName, firstName) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.info = '';
    }
    static getName(value, value2) {
        return `${value} ${value2}`;
    }
}
// class name {
//     constructor(parameters) {
//     }
// }
