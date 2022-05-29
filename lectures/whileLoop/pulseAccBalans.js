function pulseAccBalans(input) {
    let i = 0;
    let inputL = input.length;
    let curentSum = 0;

    while (i <= inputL) {
        let curentI = input[i];
        if (curentI === "NoMoreMoney") {
            break;
        }

        curentI = Number(curentI);

        if (curentI < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        curentSum += curentI;
        console.log(`Increase: ${curentI.toFixed(2)}`);
        i++;
    }
    console.log(`Total: ${curentSum.toFixed(2)}`);
}
pulseAccBalans(["120",
    "45.55",
    "-150"])