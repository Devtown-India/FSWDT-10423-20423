const addTodoBtn = document.querySelector("button.add-todo");
const input = document.querySelector("input.add-todo");
const list = document.querySelector("#tasks");

// strucuture of todo
/*
title: string
completed: boolean
id: string
*/

let todos = [
  {
    id: "r3lw42",
    title: "Learn JS",
    completed: false,
  },
  {
    id: "eqf667",
    title: "Learn React",
    completed: true,
  },
];

const generateTodo = ({ title, id, completed }) =>
  completed
    ? `   <div
id="task"
class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent"
>
<div class="inline-flex items-center space-x-2">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-slate-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </div>
  <div class="text-slate-500 line-through">${title}</div>
</div>
<div onClick="handleDelete('${id}')"  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
</div>
</div>`
    : `   <div
id="task"
class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150"
>
<div class="inline-flex items-center space-x-2">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
  <div>${title}</div>
</div>
<div onClick="handleDelete('${id}')" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
</div>
</div>`;

const randomId = () => {
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

const renderList = () => {
  list.innerHTML =
    todos.length === 0
      ? `<div class='text-center text-blue-500' >Add todos to get started</div>`
      : "";
  todos.forEach((todo) => {
    const node = document.createElement("div");
    node.innerHTML = generateTodo(todo);
    list.appendChild(node);
  });
};

const addTodo = () => {
  if (input.value === "") return alert("Please enter a todo");
  const todo = {
    id: randomId(),
    title: input.value,
    completed: false,
  };
  todos.push(todo);
  input.value = "";
  renderList();
};

const handleDelete = (id) => {
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  todos = filteredTodos;
  renderList();
};

addTodoBtn.addEventListener("click", addTodo);

renderList();
