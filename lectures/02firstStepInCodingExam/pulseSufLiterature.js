function sufLiterature(input) {
    let numPage = Number(input[0]);
    let page = Number(input[1]);
    let numDay = Number(input[2]);
    let sumX = numPage / page;
    let sumY = sumX / numDay;
    console.log(sumY);
}
sufLiterature(["432", "15", "4"]);