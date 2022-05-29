function pulseFlower(input) {
    let plant = input[0];
    let numPlants = Number(input[1]);
    let budget = Number(input[2]);
    let value = 0;

    switch (plant) {
        case "Roses": value = numPlants * 5;
            if (numPlants > 80) {
                value = value * 0.90;
            }
            break;

        case "Dahlias": value = numPlants * 3.80;
            if (numPlants > 90) {
                value = value * 0.85;
            }
            break;

        case "Tulips": value = numPlants * 2.80;
            if (numPlants > 80) {
                value = value * 0.85;
            }
            break;

        case "Narcissus": value = numPlants * 3;
            if (numPlants < 120) {
                value = value * 1.15;
            }
            break;

        case "Gladiolus": value = numPlants * 2.50;
            if (numPlants < 80) {
                value = value * 1.20;
            }
            break;

        default: break;
    }

    if (budget >= value) {
        console.log(`Hey, you have a great garden with ${numPlants} ${plant} and ${(budget - value).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(value - budget).toFixed(2)} leva more.`)
    }

}
pulseFlower(["Narcissus", "119", "360"]);