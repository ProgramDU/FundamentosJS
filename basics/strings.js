let name = "Daniela";
let lastName = "Bernardino";
let age= 19;

console.log("Soy " + name + 'Y Mi apellido es' + lastName)

console.log("I'm " + name + " " + lastName);
console.log("I\'m " + name + " " + lastName);

//Imprimir soy Daniela Bernardino y tengo 19 años

//String Templates o String Literales
// placeholder ${}
console.log(`soy ${ name } ${ lastName } y tengo ${ age } años `)

// metodos y atributos para Strings 
const texto = " Este Es Un TexTo"
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
console.log('*'.repeat(10));