const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

//template and add
const generateTemplate = (todo) => {
  const html = ` <li
          class="list-group-item d-flex align-items-center justify-content-between"
        >
          <span>${todo}</span>
          <i class="fa-solid fa-trash delete"></i>
        </li>`;
  list.innerHTML += html;
};

// Add the submit event listener
addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting

  const todo = addForm.add.value.trim(); // Get input value and remove whitespace
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//deleting the items
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//main search filtering
const filteredTodos = (term) => {
  // console.log(term);
  Array.from(list.children)
    .filter((totos) => {
      return !totos.textContent.toLocaleLowerCase().includes(term);
    })
    .forEach((todos) => {
      todos.classList.add("filtred");
    });
  Array.from(list.children)
    .filter((totos) => {
      return totos.textContent.toLocaleLowerCase().includes(term);
    })
    .forEach((todos) => {
      todos.classList.remove("filtred");
    });
};

//searching
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filteredTodos(term);
});
