// let str = "javascript is for everyonne yo!".split(" ");
// // console.log(str);
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   //i<5
//   // console.log(str[i])
//   // console.log(str);
//   result = str[i].split("");
//   i += 2;
// }
// console.log(result);

//? 2 undefined di hitung 0
// const fruits = ['banana','orange','lemon','apple','mango']
// const citrus = fruits.slice(undefined,3)
// console.log(citrus);

//? 3 Boolean adalah methost true dan falsy hafalkan falsy
// let a = ''
// console.log(Boolean(a))

//? 4 // number + 2 tidak merubah i
// let number = 13;
// let result = '';

// while (number > 0) {
//   number + 2;
//   number--;

// if (number % 3 === 0) continue;
// result = result +number;
// }
// console.log(result);

//? 5 // koma mempengaruhi jumlah array
// const objUser = {
//   username: 'userTest',
//   password: '123',
//   email: 'test123@gmail.com',
//   intro: function () {
//     return [
//       'email saya ' + this.email + ' password saya ', this.password,
//       ' hello bandung',
//     ];
//   },
// };

// console.log(objUser.intro()[0]);

//? 7
// let str = '123'
// let count = 1
// let x = 0

// while (x<str.length){ // 4 false
//   x=parseInt(str.charAt(x)) // 1=0, 2=1, 4=3
//   count++ // ngulang 2 kali jadi total count 3
//   x++ //3=2, 5=4
// }

// console.log(count + x) // 3 tambah 4 = 7

//? 8
// let number = 89 + 43 + 65 - 23 + 93 * 23 + 8;
// number - 0.5;
// number * 300;
// number--; //hanya ini yang akan di eksekusi

// console.log(number);

//? 9 
// console.log(typeof console.log());

//! 10
// let qty =3
// if(!isNaN(parseInt(qty.match())){
//   console.log('ini bukan number');
// } else {
//   console.log('ini number');
// }
// console.log(parseInt(qty.match(/^-?\d+$/)));

//? 11 true=1 dan false=0
// let arr = [
//   '5',
//   [['2.7'],[false]],
//   true,
//   'false',
//   0.5,
//   [[9], 0.3 [NaN, undefined, 'true']],
//   null,
//   '0',
//   undefined,
// ];

// console.log(Boolean(arr[1][2])+Boolean(arr[5][0]));
// console.log(Boolean(arr[1][2]))
// console.log(Boolean(arr[5][0]));

// let bulean = true
// let number = true
// console.log(number+bulean);

//? 12
let result = 20

function a(){
  console.log(result);
}

function 