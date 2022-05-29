function pulseTenisRanglist(input) {
    let tournamentCount = Number(input[0]);
    let rangPoints = Number(input[1]);
    let points = rangPoints;
    let wins = 0;
    let inputL = input.length;

    for (let index = 2; index < inputL; index++) {

        let stage = input[index];

        switch (stage) {
            case "W": points += 2000; wins++; break;
            case "F": points += 1200; break;
            case "SF": points += 720; break;
        }

    }

    let argPoint = (points - rangPoints) / tournamentCount;
    let parcentWins = (wins / tournamentCount) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(argPoint)}`);
    console.log(`${parcentWins.toFixed(2)}%`);

}
pulseTenisRanglist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);