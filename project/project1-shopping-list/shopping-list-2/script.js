// mendefinisikan harga barang
const priceItem = {
  kaos: 70000,
  kemeja: 150000,
  jaket: 200000,
  chinos: 150000,
  cargo: 170000,
};

let shoppingList = [];
let totalPrice = 0;

document.getElementById("shopping-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let item = document.getElementById("item").value.toLowerCase();
  if (item) {
    addItemToList(item);
  }
});

function addItemToList(item) {
  if (priceItem.hasOwnProperty(item)) {
    shoppingList.push(item);
    totalPrice += priceItem[item];
    dispalyList();
    updateTotalPrice();
  } else {
    alert("Barang tidak ditemukan dalam daftar harga!");
  }
}

function dispalyList() {
  let list = document.querySelector(".shopping-list");
  list.innerHTML = "";

  shoppingList.forEach((item, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${item} - Rp.${priceItem[item]}`;
    listItem.addEventListener("click", () => removeItemFromList(index));
    list.appendChild(listItem);
  });
}
function removeItemFromList(index) {
  let removedItem = shoppingList[index];
  totalPrice -= priceItem[removedItem];
  shoppingList.splice(index, 1);
  dispalyList();
  updateTotalPrice();
}

function updateTotalPrice() {
  let total = document.querySelector(".total-price");
  if (totalPrice >= 300000 && totalPrice < 1000000) {
    total.textContent = totalPrice - discount1;
  } else if (totalPrice >= 1000000) {
    total.textContent = totalPrice - discount2;
  } else {
    total.textContent = totalPrice;
  }
  discount();
}

// inisialisasi tampilan
dispalyList();
updateTotalPrice();

// diskon
const discount1 = 50000;
const discount2 = 100000;

function discount() {
  let discount = document.querySelector(".discount");
  if (totalPrice >= 500000 && totalPrice < 1000000) {
    discount.textContent = `anda mendaptkan diskon sebesar Rp${discount1}`;
  } else if (totalPrice >= 1000000) {
    discount.textContent = `anda mendaptkan diskon sebesar Rp${discount2}`;
  }
}
