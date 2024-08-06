// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("taskForm").addEventListener("submit", (e) => {
//     e.preventDefault();

//     const taskItem = document.getElementById("taskItem").value;
//     const item = `
//       <input type="checkbox" class="item" />
//       <label for="item" class="labelItem">${taskItem}</label>
//       <button class="deleteBtn">X</button>
//       `;
//     if (taskItem) {
//       addItem(item);
//     }
//   });

//   const taskList = [];

//   function addItem(item) {
//     taskList.push(item);
//     displayTaskList();
//   }

//   function displayTaskList() {
//     let list = document.getElementById("list");
//     list.innerHTML = "";
//     taskList.forEach((item, index) => {
//       const listItem = document.createElement("li");
//       listItem.innerHTML = item;
//       listItem.addEventListener("click", (e) => {
//         const deleteBtn = e.target.getAttribute("class");
//         if (deleteBtn === "deleteBtn") {
//           removeItem(index);
//         }
//       });
//       list.appendChild(listItem);
//     });
//   }

//   function removeItem(index) {
//     taskList.splice(index, 1);
//     displayTaskList();
//   }
// });

// calude ai
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskItem");
  const taskList = document.getElementById("list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}" class="${task.completed ? "active" : ""}">${task.text}</label>
        <button class="deleteBtn" data-index="${index}">X</button>
      `;
      taskList.appendChild(li);
    });
    console.log(tasks);
  }

  function addTask(text) {
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text) {
      addTask(text);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      const index = e.target.dataset.index;
      deleteTask(index);
    } else if (e.target.type === "checkbox") {
      const index = e.target.id.split("-")[1];
      toggleTask(index);
    }
  });

  renderTasks();
});
