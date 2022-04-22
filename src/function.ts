//Function

function getName() : string {
    return "Hello, my name is Arta"
}

console.log(getName())

function getAge() : number {
    return 26
}

console.log(getAge())

function printName() : void{
    console.log("Arta")
}

printName()

/*--------------------- Argument Types -----------------------*/

function multiply(val1 : number, val2 : number) : number {
    return val1*val2
}

const result = multiply(2, 3)
console.log(result)

/*--------------------- Function as Types -----------------------*/

type Add = (val1 : number, val2 :number) => number

const add: Add = (val1 : number, val2 : number) : number => {
    return val1 + val2
}

console.log(add)