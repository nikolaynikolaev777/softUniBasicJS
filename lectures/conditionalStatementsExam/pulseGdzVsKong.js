function pulseGdzVsKong(input) {
    let budgetMovie = Number(input[0]);
    let valueExtras = Number(input[1]);
    let oneSetExtras = Number(input[2]);

    let decor = budgetMovie * 0.10;
    let sumAllSet = valueExtras * oneSetExtras;

    if (valueExtras > 150) {
        sumAllSet = sumAllSet - (sumAllSet * 0.10);
    }

    let combineSum = decor + sumAllSet;
    let finalValue = budgetMovie - combineSum;

    if (finalValue < 0) {
        finalValue = combineSum - budgetMovie;
    }

    if (combineSum > budgetMovie) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${finalValue.toFixed(2)} leva more.`);
    } else if (combineSum <= budgetMovie) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${finalValue.toFixed(2)} leva left.`);
    }
}
pulseGdzVsKong(["15437.62", "186", "57.99"])