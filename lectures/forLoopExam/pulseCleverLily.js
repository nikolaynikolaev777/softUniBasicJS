function pulseCleverLily(input) {
    let lilyAge = Number(input[0]);
    let priceWashmachine = Number(input[1]);
    let oneToyPrice = Number(input[2]);
    let evenAge = 0;
    let oddAge = 0;
    let final = 0;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            evenAge += (i * 10) / 2;
            evenAge -= 1;
        } else {
            oddAge += oneToyPrice;
        }
        final = evenAge + oddAge;
    }

    if (priceWashmachine <= final) {
        console.log(`Yes! ${(final - priceWashmachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashmachine - final).toFixed(2)}`);
    }
}
pulseCleverLily(["21",
"1570.98",
"3"]);