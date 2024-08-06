// list
// document.getElementById("shopping-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   let item = document.getElementById("item").value;
//   if (item) {
//     addItemToList(item);
//   }
// });

// let shoppingList = [];

// function addItemToList(item) {
//   shoppingList.push(item);
//   dispalyList();
// }

// function dispalyList() {
//   let list = document.getElementById("shopping-list");
//   list.innerHTML = "";

//   shoppingList.forEach((item, index) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = item;
//     listItem.addEventListener("click", () => removeItemFromList(index));
//     list.appendChild(listItem);
//   });
// }

// function removeItemFromList(index) {
//   shoppingList.splice(index, 1);
//   dispalyList();
// }

// claude ai
// // definisikan objek untuk menyimpan harga barang
const priceList = {
  wortel: 3000,
  sawi: 4500,
  kangkung: 2500,
  brokoli: 8000,
  "kacang panjang": 2000,
};

let shoppingList = [];
let totalPrice = 0;

document.getElementById("shopping-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let item = document.getElementById("item").value.toLowerCase();
  if (item) {
    addItemToList(item);
  }
});

function addItemToList(item) {
  if (priceList.hasOwnProperty(item)) {
    shoppingList.push(item);
    totalPrice += priceList[item];
    displayList();
    updateTotalPrice();
  } else {
    alert("Barang tidak ditemukan dalam daftar harga!");
  }
}

function displayList() {
  let list = document.getElementById("shopping-list");
  list.innerHTML = "";

  shoppingList.forEach((item, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${item} - Rp.${priceList[item]}`;
    listItem.addEventListener("click", () => removeItemFromList(index));
    list.appendChild(listItem);
  });
}

function removeItemFromList(index) {
  let removedItem = shoppingList[index];
  totalPrice -= priceList[removedItem];
  shoppingList.splice(index, 1);
  displayList();
  updateTotalPrice();
}

function updateTotalPrice() {
  document.querySelector(".price").textContent = `Total: Rp.${totalPrice}`;
}

// Inisialisasi tampilan
displayList();
updateTotalPrice();

// chatGPT
// document.getElementById("shopping-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   let item = document.getElementById("item").value;
//   if (item) {
//     addItemToList(item);
//   }
// });

// let shoppingList = [];
// let totalPrice = 0;

// function addItemToList(item) {
//   let priceList = document.querySelectorAll(".price-list .tBody[data-item]");
//   let itemPrice = 0;

//   priceList.forEach((priceItem) => {
//     if (priceItem.dataset.item === item) {
//       itemPrice = parseInt(priceItem.dataset.price);
//     }
//   });

//   if (itemPrice > 0) {
//     shoppingList.push({ item, price: itemPrice });
//     totalPrice += itemPrice;
//     dispalyList();
//     updateTotalPrice();
//   } else {
//     alert("Item not found in price list");
//   }
// }

// function dispalyList() {
//   let list = document.getElementById("shopping-list");
//   list.innerHTML = "";

//   shoppingList.forEach((itemObj, index) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = `${itemObj.item} - Rp. ${itemObj.price}`;
//     listItem.addEventListener("click", () => removeItemFromList(index));
//     list.appendChild(listItem);
//   });
// }

// function removeItemFromList(index) {
//   totalPrice -= shoppingList[index].price;
//   shoppingList.splice(index, 1);
//   dispalyList();
//   updateTotalPrice();
// }

// function updateTotalPrice() {
//   document.getElementById("total-price").textContent = totalPrice;
// }
