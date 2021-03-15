// const todos = []
const todos = JSON.parse(localStorage.getItem('todos')) || []

const render = ()=>{
    const list = document.getElementById('todo-list') //Variable list aloja elemento id 'todo-list'
    const todosTemplate = todos.map(t => '<li>' + t + '</li>') // .map Recorre el arreglo 'todos' y agrega <li> </li> a cada elemento
    list.innerHTML = todosTemplate.join('') // Concatena todos los elementos con el simbolo que se le asigne.

    const elementos = document.querySelectorAll('#todo-list li') // Accedo a li en la lista
    elementos.forEach((elemento, i) => {                 // por cada elemento en lu agregue el elemento y su indice
        elemento.addEventListener('click',() => { //evento escucha 'click'
        elemento.parentNode.removeChild(elemento) // Accedo al padre <ul> para eliminar <li> con el indice clickeado
        todos.splice(i,1) // Elimino el mismo indice en el arreglo 'todos'
        actualizaTodos(todos)      
        render() //vuelvo a renderizar para cargar los datos actualizados posterior al click hecho y cargar el array 'todos' con los datos correctos
        })
    })
}

const actualizaTodos = (t) =>{
    const todoStrings = JSON.stringify(t)
    localStorage.setItem('todos',todoStrings)
}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form') // variable 'form' aloja informacion de id 'todo-form' en html.
    form.onsubmit = (e) => {
        e.preventDefault() //Previene refresh de la pagina
        const todo = document.getElementById('todo') //Variable 'todo' aloja el campo id todo en el formulario
        const todoText = todo.value //Extrae el valor de la casilla de texto
        todo.value = ''; // setea el valor a vacio de la casilla de texto
        todos.push(todoText) // Agrega el valor del texto en el formulario al arreglo 'todos'
        actualizaTodos(todos)

        render()
    }
}

//localStorage.setItem('lala','chanchito feliz')  //localStorage.setItem(String--llave de que es lo que se guarda, String--que es lo que se va a guardar)
//localStorage.getItem('lala') // Retorna el valor de la llave, es decir 'Chanchito feliz'

//SPREAD OPERATOR

const a = {b:1} // Se crea variable 'a'
const b = a // Se crea variable 'b' = 'a'
b.c = 2 // Se agrega 'c' a 'b', lo que ademas modifica a 'a'

const c = {...a} // Spread Operator crea un objeto con todas las propiedades del objeto 'a' pero es independiente de 'a'
c.d = 12
