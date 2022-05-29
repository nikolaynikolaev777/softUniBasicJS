function pulseFamilyTrip(input) {
    let budget = Number(input[0]);
    let countNight = Number(input[1]);
    let priceNight = Number(input[2]);
    let parcent = Number(input[3]) * 0.01;

    if(countNight > 7) {
        priceNight -= priceNight * 0.05;
    }

    priceNight *= countNight;
    budget -= budget * parcent;

    let finalPrice = budget - priceNight;

    if(finalPrice > 0) {
        console.log(`Ivanovi will be left with ${finalPrice.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(0 - finalPrice).toFixed(2)} leva needed.`);
    }

}
pulseFamilyTrip(["500",
"7",
"66",
"15"])
