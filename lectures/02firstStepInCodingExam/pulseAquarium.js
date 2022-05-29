function aquarium(input) {
 let leght = Number(input[0]);
 let widht = Number(input[1]);
 let height = Number(input[2]);
 let parcent = Number(input[3]) * 0.01;

let volume = leght * widht * height;
let sum = volume / 1000;
let needLit = sum * (1 - parcent);

console.log(needLit);

}
aquarium(["105", "77", "89", "18.5"]);