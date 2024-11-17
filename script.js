"use script";


// const formTodo = document.getElementsByClassName('form-input-todo')[0];

let todoTask = [];
const frm = document.getElementById('form-todo');


function handleAddTodo(e) {
    e.preventDefault()

    const inputTodo = document.getElementById('input-todo').value
    
    console.log(inputTodo)

    todoTask.push(inputTodo)

    console.log(todoTask)
    
        const listTask = document.createElement('li');
        listTask.textContent = inputTodo

        document.querySelector('ul').appendChild(listTask)

    todoTask.push(inputTodo)

    frm.reset();
}

console.log(todoTask)
