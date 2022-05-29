function pulseJorney(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            budget = budget * 0.30;
            place = "Camp";
        } else if (season === "winter") {
            budget = budget * 0.70;
            place = "Hotel";
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            budget = budget * 0.40;
            place = "Camp";
        } else if (season === "winter") {
            budget = budget * 0.80;
            place = "Hotel";
        }
    } else if (budget > 1000) {
        destination = "Europe";
        budget = budget * 0.90;
        place = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
pulseJorney(["1500", "summer"]);