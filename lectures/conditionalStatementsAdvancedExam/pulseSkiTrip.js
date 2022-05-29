function pulseSkiTrip(input) {
    let numDays = Number(input[0]) - 1;
    let place = input[1];
    let assessment = input[2];
    let numNight = numDays ;

    switch (place) {
        case "room for one person": numDays = numDays * 18; break;
        case "apartment": numDays = numDays * 25;
            if (numNight < 10) {
                numDays = numDays * 0.70;
            } else if (numNight >= 10 && numNight <= 15) {
                numDays = numDays * 0.65;
            } else if (numNight > 15) {
                numDays = numDays * 0.50;
            }
            break;
        case "president apartment": numDays = numDays * 35;
            if (numNight < 10) {
                numDays = numDays * 0.90;
            } else if (numNight >= 10 && numNight <= 15) {
                numDays = numDays * 0.85;
            } else if (numNight > 15) {
                numDays = numDays * 0.80;
            }
            break;
    }

    if (assessment === "positive") {
        numDays = numDays * 1.25;
    } else if (assessment === "negative") {
        numDays = numDays * 0.90;
    }

    console.log(numDays.toFixed(2));
}
pulseSkiTrip(["2", "apartment", "positive"]);