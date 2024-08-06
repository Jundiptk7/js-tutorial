// function add() {
//   console.log("hello");
//   return `<h1>hello</h1>`;
// }
const list = document.getElementById("list");

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const el = `<input type="checkbox">hello</input>`;
  list.innerHTML = el;
});
