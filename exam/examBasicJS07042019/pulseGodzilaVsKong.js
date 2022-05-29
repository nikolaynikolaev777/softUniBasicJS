function pulseGodzilaVsKong(input) {
    let budgetMovie = Number(input[0]);
    let countStatist = Number(input[1]);
    let priceSetStatist = Number(input[2]);

    let decor = budgetMovie * 0.10;

    if (countStatist > 150) {
        priceSetStatist *= 0.90;
    }

    let sum = (priceSetStatist * countStatist) + decor;

    if (sum > budgetMovie) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sum - budgetMovie).toFixed(2)} leva more.`);
    } else if (sum <= budgetMovie) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budgetMovie - sum).toFixed(2)} leva left.`);
    }

}
pulseGodzilaVsKong(["9587.88",
    "222",
    "55.68"])


