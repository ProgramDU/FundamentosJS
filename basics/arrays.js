//Arrays en JavaScrip
const miArray = [1, 2,  4, true, 'Hello', 'A', 2.1, [1, 1]]
console.log(miArray);
console.log(miArray[0]);
console.log(miArray[1]);
miArray[0] = "one";
miArray[3] = false;
console.log(miArray);

// pila en JS
//Last in first out
//Ingresar valores al final
//Extraer valores del final 
//pop, shift, unshift, push

const pila = [];
//inssertar con
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila);
console.log(pila.pop());
console.log(pila);
console.log(pila.pop());
console.log(pila);

//colas JS
// first in first out 
const cola =[]
cola.unshift(1);
cola.unshift(2);
cola.unshift(3);
console.log(cola);
console.log(cola.shift());
console.log(cola);
console.log(cola.shift());
console.log(cola);