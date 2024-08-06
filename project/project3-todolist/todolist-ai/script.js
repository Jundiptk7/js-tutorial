document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // fungsi untuk membuat elemen task baru
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    return li;
  }

  // fungsi untuk menambah task ke dalam daftar
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskElement = createTaskElement(taskText);

      taskList.appendChild(taskElement);
      taskInput.value = "";
    }
  }

  addTaskBtn.addEventListener("click", addTask);

  // menambahkan event listener untuk menambah task dengan menekan enter
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
