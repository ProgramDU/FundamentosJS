//los objetos nos permiten alamcenar datos
//a partir de una clave 
/*
miobjeto ={ clave: valor, }
miObjeto.clave
miObjeto['clave']
*/

const subject = {
    name: 'priogramacion',
    totalHours: 90,
    weekHours: 7,
    classroom: 'lab progra',
    teacher: 'Jose Manuel',
    'practice hours':60

}

console.log(subject.name);
console.log(subject.totalHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.classroom = 'Lab programacion1';
console.log(subject.classroom);

console.log(subject);

subject['Teorical hours'] = 30;
console.log(subject);

const group = {
    name: '4C',
    career: 'TIADSM',
    subjects: [
        subject
    ], 
    students: [
        { name: 'Gael', lastname: 'Perez'},
        { name: 'Juan', lastname: 'Sanchez'},
        { name: 'Daniela', lastname: 'Alvarez'}
    ]
}

console.log(group);
console.log(group.students);