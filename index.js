const addTodoBtn = document.getElementById("addTodoBtn");
const container = document.querySelector(".container");

addTodoBtn.addEventListener("click", function() {
  // create a new div element
  const newTodoDiv = document.createElement("div");
  newTodoDiv.classList.add("todo");

  // create input elements
  const todoValueInput = document.createElement("input");
  todoValueInput.classList.add("todo__value");
  todoValueInput.setAttribute("type", "text");
  todoValueInput.setAttribute("placeholder", "(empty)");

  const todoCheckboxInput = document.createElement("input");
  todoCheckboxInput.classList.add("todo__checkbox");
  todoCheckboxInput.setAttribute("type", "checkbox");

  // append input elements to the new div element
  newTodoDiv.appendChild(todoValueInput);
  newTodoDiv.appendChild(todoCheckboxInput);

  // append the new div element to the container
  container.appendChild(newTodoDiv);
});
