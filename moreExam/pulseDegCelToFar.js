function pulseDegCelToFar(input) {
    let degCel = Number(input[0]);

    let degFar = degCel * 1.8 + 32;
    console.log(degFar.toFixed(2));
}
pulseDegCelToFar(["32.3"]);