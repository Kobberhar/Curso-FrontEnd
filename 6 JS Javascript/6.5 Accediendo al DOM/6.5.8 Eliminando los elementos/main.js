const todos = []

window.onload = () => {
    const form = document.getElementById('todo-form') // variable 'form' aloja informacion de id 'todo-form' en html.
    form.onsubmit = (e) => {
        e.preventDefault() //Previene refresh de la pagina
        const todo = document.getElementById('todo') //Variable 'todo' aloja el campo id todo en el formulario
        const todoText = todo.value //Extrae el valor de la casilla de texto
        todo.value = ''; // setea el valor a vacio de la casilla de texto
        todos.push(todoText) // Agrega el valor del texto en el formulario al arreglo 'todos'
        const list = document.getElementById('todo-list') //Variable list aloja elemento id 'todo-list'
        const todosTemplate = todos.map(t => '<li>' + t + '</li>') // .map Recorre el arreglo 'todos' y agrega <li> </li> a cada elemento
        list.innerHTML = todosTemplate.join('') // Concatena todos los elementos con el simbolo que se le asigne.

        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i) => {
            
            elemento.addEventListener('click',() => {
                elemento.parentNode.removeChild(elemento)
                todos.splice(i,1)
                console.log(elemento, i)
            })
        })
    }
}

