const todos = []

window.onload = () => {
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value
        todo.value = '';
        todos.push(todoText)
        const list = document.getElementById('todo-list')
        list.innerHTML = ''
        for (let i=0; i < todos.length; i++){
            list.innerHTML += '<li>'+todos[i]+'</>'    
        }
    }
}