function pulseVacantion(input) {
    let moneyTrip = Number(input[0]);
    let actualMoney = Number(input[1]);
    let i = 2;
    let inputL = input.length;
    let spend = 0;
    let days = 0;

    while (i <= inputL) {
        curentI = input[i];

        switch (curentI) {
            case "spend": actualMoney -= Number(input[i + 1]); days++; spend++; break;
            case "save": actualMoney += Number(input[i + 1]); days++; spend = 0; break;
        }

        if (actualMoney < 0) {
            actualMoney = 0;
        }

        if (spend === 5) {
            console.log(`You can't save the money.`);
            console.log(spend);
            break;
        }

        if (actualMoney >= moneyTrip) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }

        i++;
    }
}
pulseVacantion(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])