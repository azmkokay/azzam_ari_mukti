/** @format */
// nomor 1
// buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1km harga ongkir adalah 2000
// berapa total pricenya ?

const cart = [];
const ongkirPerKm = 2000;

const hitungTotalBiaya = () => {
  let totalBiaya = 0;

  cart.forEach((item) => {
    totalBiaya += item.price * item.qty;
  });

  const jarak = cart[0].restoran.jarak;
  const ongkir = jarak * ongkirPerKm;

  return totalBiaya + ongkir;
};

const addFood = (food, restoran) => {
  const existingFoodIndex = cart.findIndex(
    (item) => item.food.name === food.name
  );

  if (existingFoodIndex !== -1) {
    cart[existingFoodIndex].qty += food.qty;
  } else {
    cart.push({ food, restoran });
  }
};

const hapusMakanan = (foodName) => {
  const index = cart.findIndex((item) => item.food.name === foodName);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

const editQtyMakanan = (foodName, newQty) => {
  const index = cart.findIndex((item) => item.food.name === foodName);
  if (index !== -1) {
    cart[index].food.qty = newQty;
  }
};

// Contoh penggunaan
const capcay = { name: "capcay", price: 50000, qty: 2 };
const kwetiaw99 = { name: "kwetiaw 99", jarak: 5 };

addFood(capcay, kwetiaw99);
addFood({ name: "nasi goreng", price: 45000, qty: 1 }, kwetiaw99);

console.log(cart);
console.log("Total Biaya:", hitungTotalBiaya());

hapusMakanan("nasi goreng");
console.log(cart);

editQtyMakanan("capcay", 3);
console.log(cart);

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

// CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE

// nomor 2 => buat lah 5 function dengan parameter tinggi untuk menciptakan segitia bintang dengan menggunakan looping

// expected output :
console.log("=========1=========");
// *
// **
// ***
// ****

for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

console.log("=========2=========");
//  ****
//   ***
//    **
//     *

for (let i = 4; i >= 1; i--) {
  let space = "";
  let stars = "";

  for (let j = 1; j <= 4 - i; j++) {
    space += " ";
  }

  for (let k = 1; k <= i; k++) {
    stars += "*";
  }

  console.log(space + stars);
}

console.log("=========3=========");

//     *
//    **
//   ***
//  ****

for (let i = 1; i <= 4; i++) {
  let space = "";
  let stars = "";

  for (let j = 1; j <= 4 - i; j++) {
    space += " ";
  }

  for (let k = 1; k <= i; k++) {
    stars += "*";
  }

  console.log(space + stars);
}

console.log("=========4=========");
//  ****
//  ***
//  **
//  *

for (let i = 4; i >= 1; i--) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

console.log("=========5=========");
//      *
//     * *
//    * * *
//   * * * *

for (let i = 1; i <= 4; i++) {
  let space = "";
  let stars = "";

  for (let j = 1; j <= 4 - i; j++) {
    space += " ";
  }

  for (let k = 1; k <= i; k++) {
    stars += "* ";
  }

  console.log(space + stars);
}
