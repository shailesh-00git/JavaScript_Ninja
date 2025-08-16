const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Create list item template
const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex align-items-center justify-content-between">
      <span>${todo}</span>
      <i class="fa-solid fa-trash delete"></i>
    </li>
  `;
  list.innerHTML += html;
};
// Save todos to localStorage
const saveTodos = () => {
  const todosArray = Array.from(list.children);
  const mapped = todosArray.map(
    (item) => item.querySelector("span").textContent
  );
  localStorage.setItem("todos", JSON.stringify(mapped));
};

// Load todos from localStorage on page load
const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => generateTemplate(todo));
};

// Add todo
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);

    saveTodos();
    addForm.reset();
  }
});

// Delete todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveTodos();
  }
});

// Filter todos
const filteredTodos = (term) => {
  Array.from(list.children).forEach((todo) => {
    todo.classList.toggle(
      "filtered",
      !todo.textContent.toLowerCase().includes(term)
    );
  });
};

// Search todos
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filteredTodos(term);
});

// Load existing todos on page start
document.addEventListener("DOMContentLoaded", loadTodos);
