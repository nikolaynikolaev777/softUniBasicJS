function pulseCoins(input) {
    let change = Number(input[0]);
    let i = 0;
    let coins = 0;

    while (i <= change) {

        if (change >= 2.00) {
            change -= 2.00;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 1.00 && change < 2.00) {
            change = change - 1.00;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 0.50 && change < 1.00) {
            change -= 0.50;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 0.20 && change < 0.50) {
            change -= 0.20;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 0.10 && change < 0.20) {
            change -= 0.10;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 0.05 && change < 0.10) {
            change -= 0.05;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 0.02 && change < 0.05) {
            change -= 0.02;
            change = change.toFixed(2);
            coins++;
        }
        if (change >= 0.01 && change < 0.02) {
            change -= 0.01;
            change = change.toFixed(2);
            coins++;
        }

        change = Number(change);
        
        if(change === 0){
            break;
        }
    }
    console.log(coins);
}
pulseCoins(["0.59"])