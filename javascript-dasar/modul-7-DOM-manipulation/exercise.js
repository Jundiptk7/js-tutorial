// const div = document.getElementById("content");
// const img = document.getElementById("image");
// const btn = document.getElementById("button");

// //
// btn.addEventListener("click", () => {
//   div.textContent = "Content Changed!";
//   img.setAttribute("src", "newImage.jpg");
//   div.style.backgroundColor = "green";
//   div.style.color = "white";
//   btn.classList.toggle("active");
// });

//
// const container = document.getElementById("container");
// const addBtn = document.getElementById("addButton");
// const removeBtn = document.getElementById("removeButton");
// const newElement = document.createElement("div");
// newElement.textContent = "New Element";

// addBtn.addEventListener("click", () => {
//   container.appendChild(newElement);
// });

// removeBtn.addEventListener("click", () => {
//   // container.removeChild(newElement);
//   if (container.lastChild) {
//     container.removeChild(container.lastChild);
//   }
// });

// dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enable");
  } else {
    localStorage.setItem("darkMode", "disable");
  }
}

const darkMode = document.getElementById("darkModeToggle");

darkMode.addEventListener("change", toggleDarkMode);

if (localStorage.getItem("darkMode") === "enable") {
  document.body.classList.add("dark-mode");
  darkMode.checked = true;
}
