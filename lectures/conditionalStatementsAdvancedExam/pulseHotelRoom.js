function pulseHotelRoom(input) {
    let month = input[0];
    let numNight = Number(input[1]);
    let studio = 0;
    let apartament = 0;

    switch (month) {
        case "May":
        case "October": studio = numNight * 50; apartament = numNight * 65;
            if (numNight > 7 && numNight < 14) {
                studio = studio * 0.95;
            } else if (numNight > 14) {
                studio = studio * 0.70;
            }
            break;

        case "June":
        case "September": studio = numNight * 75.20; apartament = numNight * 68.70;
            if (numNight > 14) {
                studio = studio * 0.80;
            }
            break;

        case "July":
        case "August": studio = numNight * 76; apartament = numNight * 77; break;
    }

    if (numNight > 14) {
        apartament = apartament * 0.90;
    }

    console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
pulseHotelRoom(["June", "15"])