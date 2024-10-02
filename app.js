// // Arrayga misol: for ichida for,Arrayni aniqlab olish

// let data = [1, [1, 2, 3, 4, 5, 6, 7], false, "hello", [12, 34, 56, 78]];

// let result = 0;

// for (let i = 0; i < data.length; i++) {
//   if (Array.isArray(data[i])) {
//     for (let k = 0; k < data[i].length; k++) {
//       result += data[i][k];
//     }
//   }
// }
// console.log(result);

// example

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// let max = 0;
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (min == 0) {
//     min < arr[i];
//   } else if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// const minIndex = arr.indexOf(min);
// const maxIndex = arr.indexOf(max);

// arr[minIndex] = max;
// arr[maxIndex] = min;

// console.log(arr);

// array 1
const a = prompt("Son kiriting");
const kv = 0;

for (let i = 1; i < a; i++) {
  kv = i * i;
  console.log(i);
}
