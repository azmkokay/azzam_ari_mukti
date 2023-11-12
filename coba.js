// // const person = {
// //   firstName: "ElmoreNorth Clement",
// //   lastName: "17",

// //   get fullName() {
// //     return `${this.firstName} ${this.lastName}`
// //   }
// //   set fullName(namaBaru) {
// //     this.nama = namaBaru;
// //   }
// // }

// const obj = {
//   nama: "John",
//   get namaLengkap() {
//     return this.nama;
//   },
//   set namaLengkap(namaBaru) {
//     this.nama = namaBaru;
//   },
// };

// console.log(obj.namaLengkap); // Menggunakan getter
// obj.namaLengkap = "Doe"; // Menggunakan setter
// console.log(obj.namaLengkap);

// //
// class Lingkaran {
//   constructor(jariJari) {
//     this._jariJari = jariJari;
//   }

//   get jariJari() {
//     return this._jariJari;
//   }

//   set jariJari(jariJariBaru) {
//     if (jariJariBaru >= 0) {
//       this._jariJari = jariJariBaru;
//     } else {
//       console.log("Jari-jari tidak boleh negatif.");
//     }
//   }
// }

// const lingkaran = new Lingkaran(5);
// console.log(lingkaran.jariJari); // Menggunakan getter
// lingkaran.jariJari = -3; // Menggunakan setter dengan nilai negatif
// console.log(lingkaran.jariJari); // Nilai jari-jari tidak berubah
// lingkaran.jariJari = 8; // Menggunakan setter dengan nilai positif
// console.log(lingkaran.jariJari); // Nilai jari-jari berubah menjadi 8

//*
// let peopole = {
//   name: "azzam",
//   age: 28,
// };
// const { name, age } = peopole;

// console.log(name);

// class User {
//   name = "";
//   constructor(name) {
//     this.name = name;
//   }
//   greeting() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const user = new User("david");
// user.greeting();
// console.log(user.name);

//*
// class Mobil {
//   constructor(merek) {
//     this.merek = merek; // Properti publik
//   }

//   getInfo() {
//     return `Merek: ${this.merek}`;
//   }
// }

// const mobilBaru = new Mobil('Toyota');
// console.log(mobilBaru.merek); // Mengakses properti publik

//*
// class Mobil {
//   #merek; // Properti privat

//   constructor(merek) {
//     this.#merek = merek;
//   }

//   get Info() {
//     return `Merek: ${this.#merek}`;
//   }
//   set info(value){
//     return 
//   }
// }


// const mobilBaru = new Mobil('Toyota');
// console.log(mobilBaru.#merek); // Akan menghasilkan kesalahan karena properti privat

class Mobil {
  #merek; // Properti privat

  constructor(merek) {
    this.#merek = merek;
  }

  getMerek() {
    return this.#merek; // Metode untuk mengakses properti privat
  }

  setMerek(newMerek) {
    this.#merek = newMerek; // Metode untuk mengubah properti privat
  }
}

const mobilBaru = new Mobil('Toyota');

console.log(mobilBaru.getMerek()); // Menggunakan metode untuk mengakses properti privat
mobilBaru.setMerek('Honda'); // Menggunakan metode untuk mengubah properti privat
console.log(mobilBaru.getMerek()); // Menggunakan metode untuk mengakses properti privat setelah perubahan


//*
// class Lingkaran {
//   static pi = 3.14; // Properti statis

//   constructor(jariJari) {
//     this.jariJari = jariJari;
//   }

//   hitungLuas() {
//     return Lingkaran.pi * this.jariJari * this.jariJari; // Mengakses properti statis
//   }
// }

// console.log(Lingkaran.pi); // Mengakses properti statis langsung dari kelas
// const lingkaran = new Lingkaran(5);
// console.log(lingkaran.hitungLuas()); // Mengakses properti statis melalui instance objek
