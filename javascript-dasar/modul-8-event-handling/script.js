const btn = document.getElementById("myBtn");
const click = document.getElementById("click");
const inp = document.getElementById("myInput");

btn.addEventListener("click", (e) => {
  console.log("hello!");
  console.log("type", e.type);
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
});

click.addEventListener("click", (e) => {
  e.preventDefault();
});

inp.addEventListener("keydown", (e) => {
  console.log("key pressed:", e.key);
});
