 // Aquí tu código
const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregar.addEventListener('click', () => {
    const nuevoElemento = prompt('Ingrese un nuevo elemento para la lista:');
    const li = document.createElement('li');
    li.textContent = nuevoElemento;
    lista.appendChild(li);
    
});
 