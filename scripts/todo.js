const todoList = [{
  name: 'Prepare breakfast',
  dueDate: '2025-11-11'
}, {
  name: 'Wash dishes',
  dueDate: '2025-11-12'
}];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(todoObject => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button 
      js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

function validateTodo(name, dueDate) {
  //if (name.trim() === "" || dueDate.trim() === "") 
  if (!name.trim() || !dueDate.trim()) {
    alert("Please enter both the todo name and due date.")
    return false;
  }
  return true;
}

document.querySelector('.js-add-button')
.addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-todo-name');
  const name = inputElement.value;
  const dueDateElement = document.querySelector('.js-due-date');
  const dueDate = dueDateElement.value;


  //if (validateTodo(name, dueDate) === false)
  if (!validateTodo(name, dueDate)) {
    return;
  }
  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  dueDateElement.value = '';
  
  renderTodoList();
}

