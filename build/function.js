"use strict";
//Function
function getName() {
    return "Hello, my name is Arta";
}
console.log(getName());
function getAge() {
    return 26;
}
console.log(getAge());
function printName() {
    console.log("Arta");
}
printName();
/*--------------------- Argument Types -----------------------*/
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 3);
console.log(result);
const add = (val1, val2) => {
    return val1 + val2;
};
console.log(add);
