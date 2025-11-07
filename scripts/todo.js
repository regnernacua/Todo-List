const todoList = [{
  name: 'Bake Cookies',
  dueDate: '2025-11-07'
}, {
  name: 'Play Badminton',
  dueDate: '2025-11-08'
}, {
  name: 'Feed the cats',
  dueDate: '2025-11-09'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(todoObject => {
    const {name, dueDate} = todoObject;

    const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).replace(",", "");
    const html = `
      <div class="todo-item">
        <div>${name}</div>
        <div>${formattedDate}</div>
        <button class="delete-button 
        js-delete-button">Delete</button>
      </div>
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

