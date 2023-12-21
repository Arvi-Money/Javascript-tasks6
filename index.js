// // Task - 1
// let array = [56, 25, 10, 7, 11];
// let ToqlarSoni = 0;

// function ToqSonlar(arg) {
//     for (let i = 0; i < arg.length; i++){
//         if (arg[i] % 2 !== 0){
//             ToqlarSoni ++
//         }
//     }
//     return ToqSonlar
// }
// ToqSonlar(array);
// console.log(ToqlarSoni);



// // Task - 2
// let array = [21, 55, 21, 3, 9];
// let kopaytma = 1;

// function Bolinuvchilar(arg) {
//     for (let i = 0; i < arg.length; i++){
//         if(arg[i] % 3 == 0 & arg[i] % 7 == 0){
//             kopaytma *=arg[i];
//         }
//     }
// }
// Bolinuvchilar(array);
// console.log(kopaytma);



// // Task - 3
// let array = [87, 22, 4, 67, 31, 83];
// let ToqSonlar = [];

// function massiv(arg) {
//     for (let i = 0; i < arg.length; i++){
//         if(arg[i] % 2 !== 0){
//             ToqSonlar.push(arg[i]);
//         }
//     }
// }
// massiv(array);
// console.log(ToqSonlar);



// // Task - 4
// let array = [8, 59, 20, 77, 32, 83];
// let JuftSonlar = [];

// function massiv(arg) {
//     for (let i = 0; i < arg.length; i++){
//         if(i % 2 == 0){
//             JuftSonlar.push(arg[i]);
//         }
//     }
// }
// massiv(array);
// console.log(JuftSonlar);



// // Task - 5
// let array = ["Ball", "hello", "world", "family"];
// let Boshharf = [];

// function massiv(arg) {
//     for (let i = 0; i < arg.length; i++){
//        Boshharf.push(array[i][0]);
//     }
// }
// massiv(array);
// console.log(Boshharf);



// Task - 6
// let array = [87, 22, 4, 67, 31, 83];
// let boluvchilaSoni = 0;
// let TubSonlar = 0;

// function massiv(arg) {
//     for (let i = 0; i < arg.length; i++){
//       for (let j = 1; j <= arg[i]; j++){
//         if(arg[i] % j == 0){
//             boluvchilaSoni++
//         }
//       }
//     }
// }

// if(boluvchilaSoni = 2){
//     TubSonlar++
//   }
// massiv(array);
// console.log(TubSonlar);



// Task - 7
let array = [33, 20, 77, 32, 50];
let JuftSonlar = [];

function massiv(arg) {
    for (let i = 0; i < arg.length; i++){
        if(arg[i] % 2 == 0 && arg[i] % 5 == 0){
            JuftSonlar.push(arg[i]);
        }
    }
}
massiv(array);
console.log(JuftSonlar);