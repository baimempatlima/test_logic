//Task 1
// let a = parseInt(prompt("masukkan angka"));
// function fungsiFac(n) {
//   if (n === 0) return 1;
//   return n * fungsiFac(n - 1);
// }
// fungsiFac(a);
// console.log("Hasil:", fungsiFac(a));

//Task 2
// let str = prompt("masukkan inputan string");
// function stringReverse(str) {
//   var newStr = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log("Hasil:", stringReverse(str));

//Task 4
// var angka1 = 5;
// var angka2 = 7;
// [angka1, angka2] = [angka2, angka1];
// console.log("Hasil angka1:", angka1, "& Hasil angka2:", angka2);

//Task 10
// let tahun = parseInt(prompt("Masukkan tahun: "));
// function TahunKabisat(tahun) {
//   var kondisi1 = tahun % 400 == 0;
//   var kondisi2 = tahun % 100 == 0;
//   var kondisi3 = tahun % 4 == 0;

//   if (kondisi1 || kondisi3 !== kondisi2) {
//     console.log(tahun, "tahun kabisat ");
//   } else {
//     console.log(tahun, "bukan tahun kabisat ");
//   }
// }
// TahunKabisat(tahun);

//Task 0
const number = [19, 21, 8, 15, 45];

let nilaiMax = number[0],
  nilaiMin = number[0];

function minMax(number) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] > nilaiMax) {
      nilaiMax = number[i];
    }

    if (number[i] < nilaiMin) {
      nilaiMin = number[i];
    }
  }
}

minMax(number);
console.log("low= " + nilaiMin);
console.log("high = " + nilaiMax);
