function pulseVegetableMarket(input) {
    let kgVeg = Number(input[0]);
    let kgFruit = Number(input[1]);
    let sumKgVeg = Number(input[2]);
    let sumKgFruit = Number(input[3]);
    let euro = 1.94;
    let sum = ((kgVeg * sumKgVeg) + (kgFruit * sumKgFruit)) / euro;
    console.log(sum.toFixed(2));
}
pulseVegetableMarket(["1.5", "2.5", "10", "10"])