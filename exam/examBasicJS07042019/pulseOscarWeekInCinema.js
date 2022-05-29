function pulseOscarWeekInCinema(input) {
    let nameMovie = input[0];
    let hallType = input[1];
    let countTicket = Number(input[2]);

    switch (nameMovie) {
        case "A Star Is Born":
            if (hallType === "normal") {
                countTicket *= 7.50;
            } else if (hallType === "luxury") {
                countTicket *= 10.50;
            } else if (hallType === "ultra luxury") {
                countTicket *= 13.50;
            } break;
        case "Bohemian Rhapsody":
            if (hallType === "normal") {
                countTicket *= 7.35;
            } else if (hallType === "luxury") {
                countTicket *= 9.45;
            } else if (hallType === "ultra luxury") {
                countTicket *= 12.75;
            } break;
        case "Green Book":
            if (hallType === "normal") {
                countTicket *= 8.15;
            } else if (hallType === "luxury") {
                countTicket *= 10.25;
            } else if (hallType === "ultra luxury") {
                countTicket *= 13.25;
            } break;
        case "The Favourite":
            if (hallType === "normal") {
                countTicket *= 8.75;
            } else if (hallType === "luxury") {
                countTicket *= 11.55;
            } else if (hallType === "ultra luxury") {
                countTicket *= 13.95;
            } break;
    }
    console.log(`${nameMovie} -> ${countTicket.toFixed(2)} lv.`);
}
pulseOscarWeekInCinema(["The Favourite",
"ultra luxury",
"34"])

