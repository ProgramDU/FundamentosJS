// Condicional if 
//if(exp){}
let age=18;
if(age>=18){
    console.log('Es mayor de edad');
}

//if(exp) {} else {}
if(age >=18){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// if ternario (exp)? true: false;
age >= 18 ? console.log('Es mayor'): console.log('Es menor');
//if (exp){} else if (exp) else {}

let ppt = math.random();
if(ppt > 0.33){
    console.log('cayó piedra');
} else if (ppt < 0.66){
    console.log('cayó papel');
} else {
    console.log('cayó tijera');
}
//switch case 
let day= math.floor(math.random() * 7);
switch(day){ 
    case 0:
        console.log('Es domingo');
        break;
    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
        break;
    case 3:
        console.log('Es miercoles');
        break;
    case 4:
        console.log('Es jueves');
        break;
    case 5:
        console.log('Es viernes');
        break; 
    default:
        console.log(' Es sabado');

    }
// Thruty and Falsy
// '' == false
console.log('' == false)
//'a' == true 
console.log('a' == true)
// 0 == false
console.log(0 == false)
// 1 == true
console.log(1== true)

let username = '';
let defaultName;

if (username){
    defaultName = username;
} else {
    defaultName = 'Extraño';

}
console.log(defaultName);

username = 'peter';
defaultName = username || 'Extraño'
console.log(defaultName);