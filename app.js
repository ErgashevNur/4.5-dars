// // Arrayga misol: for ichida for,Arrayni aniqlab olish

// // let data = [1, [1, 2, 3, 4, 5, 6, 7], false, "hello", [12, 34, 56, 78]];

// // let result = 0;

// // for (let i = 0; i < data.length; i++) {
// //   if (Array.isArray(data[i])) {
// //     for (let k = 0; k < data[i].length; k++) {
// //       result += data[i][k];
// //     }
// //   }
// // }
// // console.log(result);

// // example

// // let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// // let max = 0;
// // let min = 0;

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] > max) {
// //     max = arr[i];
// //   }
// //   if (min == 0) {
// //     min < arr[i];
// //   } else if (min > arr[i]) {
// //     min = arr[i];
// //   }
// // }

// // const minIndex = arr.indexOf(min);
// // const maxIndex = arr.indexOf(max);

// // arr[minIndex] = max;
// // arr[maxIndex] = min;

// // console.log(arr);

// array 1
// const n = prompt("Son kiriting");
// let kv = 2;

// for (let i = 1; i <= n; i++) {
//   console.log(kv);
//   kv = kv + kv;
// }

// array 2
// let n = 7;
// let a = 3;
// let b = 5;

// let result = [];
// result[0] = a;
// result[1] = b;

// console.log(result)

// for (let i = 0; i < n; i++) {
//   let counter = 0;
//   for (let k = 0; k < result.length; k++) {
//     counter += result[k];
//   }

//   result.push(counter);
// }

// array 3
// let n = prompt("Son kiriting");
// let num = 0;
// for (let i = n; i >= num; i--) {
//   console.log(i);
// }

// arrray 4
// const arr = [4, 5, 7, 8, 6, 9];

// for (let i = arr.length - 1; i >= 0; i -= 2) {
//   console.log(arr[i]);
// }

// array 5
// const arr = [4, 5, 7, 8, 6, 9];
// let sonj = [];
// let sont = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sonj.push(arr[i]);
//   } else {
//     sont.push(arr[i]);
//   }
// }
// console.log(sonj.join(" "), sont.reverse().join(" "));

// array 6
// let son = prompt("Son kiriting");

// for (let i = 0; i <= son; i += 2) {
//   console.log(i);
// }

// array 7
// let son = prompt("Son kiriting");
// let sont = [];

// for (let i = son; i >= 0; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// array 8
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let sonj = ["Juft sonlar"];
// let sont = ["Toq sonlar"];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     sonj.push(arr[i]);
//   } else {
//     sont.push(arr[i]);
//   }
// }
// console.log(sonj, sont);

// array 9
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let sonj = [];
// let sont = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sonj.push(arr[i]);
//   } else {
//     sont.push(arr[i]);
//   }
// }
// console.log(sont.join(" "), "||", sonj.reverse().join(" "));

// array 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let n = arr.length;

for (let i = 0; i <= Math.ceil(n / 2); i++) {
  if (i < n) {
    console.log(arr[i]);
  }
  if (n - 1 - i > i) {
    console.log(arr[n - 1 - i]);
  }
}
