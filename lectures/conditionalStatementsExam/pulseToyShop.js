function pulseToyShop(input) {
    let priceEx = Number(input[0]);
    let sawVal = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let priceOfToy = (sawVal * 2.60) + (doll * 3) + (bear * 4.10) + (minion * 8.20) + (truck * 2);
    let toyVal = sawVal + doll + bear + minion + truck;

    if (toyVal >= 50) {
        priceOfToy = priceOfToy * 0.75;
    }

    let win = priceOfToy - (priceOfToy * 0.10);

    if (win >= priceEx) {
        let moneyLeft = win - priceEx;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeded = priceEx - win;
        console.log(`Not enough money! ${moneyNeded.toFixed(2)} lv needed.`);
    }
}
pulseToyShop(["40.8", "20", "25", "30", "50", "10"]);