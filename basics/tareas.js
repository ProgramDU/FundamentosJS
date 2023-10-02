const inputTarea = document.getElementById('inputTarea');
const listaTareas =document.querySelector('#tareas ul');

const lista =[];

const addTarea = () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value = '';
    showListas();
}

const showListas = () => {
    let listaHtml = '';
    lista.forEach( listaItem => {
        listaHtml += `<li>${ listaItem }</li>`;
    });
    listaTareas.innerHTML = listaHtml;
}

