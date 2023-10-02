// funciones en javascrip
/*
function nombre(params){
    body function
}

const nombre = function (params){
    body function
}

*/

// Funciones sin parametros y sin retorno 
function saludo(){
    console.log('hellooo!');

}
saludo();

// funciones con parametro sin retorno 
const saludaA = function(name){
    console.log('holaaa' + name);

}

saludaA('clark kent');

// funciones con parametros y con retorno 
const fact = function (num) {
    if (num === 0) return 1;
    return fact(num -1) * num;

}

const result = fact(5);
console.log(result);

// Arrow functions o funciones de flecha 
//sin parametros y sin retorno 

const saludaEnChino = ()=> { console.log('Ni Hao');
}
saludaEnChino();

// con 1 parametro sin retorno 
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}

mayuscula('Hola');

const minuscula = word => {
    console.log (word.toLowerCase());
}

minuscula('HELLO');

//dos o mas parametros y con retorno 
const FullName = (FirstName, LastName) => {
    return FirstName + ' ' + LastName;

}
const NombreCompleto = FullName ('Bruce', 'Wayne');
console.log(NombreCompleto);

//  si el return es la unica linea se puede simplificar 
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*function duplica(num){
    return num * 2;
}
*/

//FUNCIONES CON PARAMETROS OPCIONALES

const WelcomeToMexico = (user= 'invitado') => {
    console.log(`Bienvenido a Mexico ${user}`);
}

WelcomeToMexico();
WelcomeToMexico("Batman");

//parametros con nombre 

const WelcomeToUtt = (user = 'invitado', city = 'Mexico') => {
    console.log(`Bienvenido ${user} de ${city}`)
}

WelcomeToUtt();
WelcomeToUtt('Bruce Wayne', 'Gotham');
WelcomeToUtt(city = 'Metropolis', user ='Superman');