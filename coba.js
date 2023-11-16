// let person = {
//   name: "Franky",
//   age: 24,
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));

//?
// let user = {
//   name: 'david',
//   greet() {
//     console.log('hello!');
//   }
// };

// user.greet();

//?
// let person = {
//   nama : 'frengky',
//   age : 24,
// }

// for (let key in person){
//   console.log(key); //* ambil key nya
//   console.log(person[key]); //* ambil value nya
// }

//?
// let person = {
//   _firstName: 'John', // menggunakan underscore untuk konvensi properti privat
//   _lastName: 'Doe',
//   set fullName(name) {
//     let parts = name.split(' ');
//     this._firstName = parts[0];
//     this._lastName = parts[1];
//   },
//   get fullName() {
//     return this._firstName + ' ' + this._lastName;
//   }
// };

// person.fullName = 'Jane Smith';
// console.log(person.fullName);

//?
// let target = { a: 1, b: 2 };
// let source = { c: 3, b: 4 };
// Object.assign(target, source);
// console.log(target); // Output: { a: 1, b: 3, c: 4 }

// let obj = { a: 1, b: 2, c: 3 };
// let entries = Object.entries(obj);
// console.log(entries); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

class User {
  name = ''
  constructor(name){
    this.name = name
  }
  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User('azzam');
user.greeting()