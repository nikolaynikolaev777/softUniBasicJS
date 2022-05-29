function pulseCoffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let countDrinks = Number(input[2]);
    let price = countDrinks;

    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": price *= 0.90; price *= 0.65; break;
                case "Normal": price *= 1; break;
                case "Extra": price *= 1.20; break;
            }
            if (countDrinks > 5) {
                price *= 0.75;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": price *= 1; price *= 0.65; break;
                case "Normal": price *= 1.20; break;
                case "Extra": price *= 1.60; break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without": price *= 0.50; price *= 0.65; break;
                case "Normal": price *= 0.60; break;
                case "Extra": price *= 0.70; break;
            }
            break;
    }

    if (price > 15) {
        price *= 0.80;
    }

    console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`)
}
pulseCoffeeMachine(["Tea",
    "Extra",
    "3"])


