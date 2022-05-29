function pulseClub(input) {
    let wantPrice = Number(input[0]);

    let inputL = input.length;
    let i = 1;
    let sum = 0;
    while (i < inputL) {
        let thisI = input[i];

        if (thisI === "Party!") {
            break;
        }

        let coctail = input[i].length;
        sum += coctail * input[i + 1];

        if (sum % 2 === 1) {
            sum *= 0.75;
        }

        i += 2;
    }

    if (sum < wantPrice) {
        console.log(`We need ${(wantPrice - sum).toFixed(2)} leva more.`);
    } else if (sum >= wantPrice) {
        console.log(`Target acquired.`);
    }

    console.log(`Club income - ${sum.toFixed(2)} leva.`);

}
pulseClub(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])
