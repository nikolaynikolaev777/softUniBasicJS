function pulseTravelAgancy(input) {
    let cityName = input[0];
    let packages = input[1];
    let vip = input[2];
    let daysStay = Number(input[3]);
    let price = daysStay;

    if (daysStay > 1) {

        switch (cityName) {
            case "Bansko":
            case "Borovets":
                switch (packages) {
                    case "noEquipment": price *= 80; if (vip === "yes") { price *= 0.95 }
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`); break;
                    case "withEquipment": price *= 100; if (vip === "yes") { price *= 0.90 }
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`); break;
                } break;
            case "Varna":
            case "Burgas":
                switch (packages) {
                    case "noBreakfast": price *= 100; if (vip === "yes") { price *= 0.93 }
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`); break;
                    case "withBreakfast": price *= 130; if (vip === "yes") { price *= 0.88 }
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`); break;
                } break;

            default: console.log(`Invalid input!`); break;
        }
    } else {
        console.log(`Days must be positive number!`);
    }

    if (daysStay > 7) {
        daysStay++;
    }

}
pulseTravelAgancy(["Borovets",
    "noEquipment",
    "yes",
    "0"])


