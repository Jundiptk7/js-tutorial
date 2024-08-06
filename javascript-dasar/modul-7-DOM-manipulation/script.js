// DOM Manipulation
// 1.seleksi elemen DOM
// dua cara paling umum
// getElementById mengambil element yang memiliki attribut id
// const id = document.getElementById("heading");
// id.style.fontFamily = "arial";

// querySelector bisa id, class, tag
// const text1 = document.querySelector(".text"); //class
// text1.style.fontFamily = "cursive";

// const text2 = document.querySelector("#text"); //id
// text2.style.fontFamily = "georgia";

// const h2 = document.querySelector("h2"); //tag html
// h2.addEventListener("mousemove", () => {
//   h2.style.color = "red";
// });

// querySelectorAll untuk mengambil element lebih dari satu, mengemabalikan nodeList(array)
// const links = document.querySelectorAll("a");
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.style.color = "red";
//   });
// });

// 2. mengubah konten elemen
// innerHTML
// id.innerHTML = "new content";
// h2.innerHTML = "halo";

// textContent
// text1.textContent = "new text";
// text2.textContent = "zaid jundullah alfarouq";

// 3. mengubah atribut elemen
// setAttribut mengatur nilai atribut elemen
// id.setAttribute("class", "newClass");

// getAttribut mendapatkan nilai atribut
// console.log(text1.getAttribute("class"));

// 4. mengubah gaya elemen
// text2.style.color = "green";

// 5. mengelola kelas elemen
// h2.classList.add("newClass"); //menambah
// text1.classList.remove("text"); //menghapus
// id.classList.toggle("toggleClass"); //menambah atau menghapus berdasarkan keberadaannya
// console.log(text2.classList.contains("class"));

// // 6. menambah dan menghapus elemen DOM
// const parent = document.getElementById("content");
// parent.style.backgroundColor = "lime";

// // menambah elemen
// // createElement
// const newElement = document.createElement("div");
// newElement.textContent = "hello!";
// newElement.setAttribute("id", "newId");
// // appendChild
// parent.appendChild(newElement);
// // insertBefore
// const newEl = document.createElement("h1");
// newEl.textContent = "heading";
// parent.insertBefore(newEl, newElement);

// // menghapus elemen
// // removeChild
// parent.removeChild(newEl);

// // remove
// const img = document.getElementById("image");
// img.remove();

// // 7. Navigasi DOM - proses bergerak melalui elemen-elemen dalam DOM
// // parentNode
// let parentnode = element.parentnode;
// // childNodes
// let childnode = element.childnodes;
// // firstChild dan lastChild
// let first = element.firstChild;
// let last = element.lastChild;
// // nextSibling dan previousSibling
// let next = element.nextSibling;
// let prev = element.previousSibling;
