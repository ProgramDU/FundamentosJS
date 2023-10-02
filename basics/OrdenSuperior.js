const myFunctionWithBigName = () => {
    console.log(' Funcion Inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Funcion Uno');
}

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('Ejecuta funcion Dos');
}

funOne();
funTwo('Dani');

const funThree = (otherFunction) => {
    console.log('inicia funcion tres');
    otherFunction();
    console.log('termina funcion tres')
}

funThree(funOne);


funThree(() => console.log('función de flecha'));
