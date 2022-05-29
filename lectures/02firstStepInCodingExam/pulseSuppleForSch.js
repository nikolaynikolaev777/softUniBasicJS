function suppleForSch(input) {
    let penPack = Number(input[0]) * 5.80;
    let marPack = Number(input[1]) * 7.20;
    let prepar = Number(input[2]) * 1.20;
    let disc = Number(input[3]) * 0.01;
    let sum = penPack + marPack + prepar;
    let finish = sum - (sum * disc);
    console.log(finish);
}
suppleForSch(["4", "2", "5", "13"]);