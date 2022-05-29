function pulseFootballTournament(input) {
    let nameTeam = input[0];
    let coutMatch = Number(input[1]);
    let inputL = input.length;
    let i = 2;
    let win = 0;
    let draw = 0;
    let lose = 0;
    let points = 0;
    let winRate = 0;

    if (coutMatch === 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    }

    while (i < inputL) {
        let curentI = input[i];

        switch (curentI) {
            case "W": win++; points += 3; break;
            case "D": draw++; points += 1; break;
            case "L": lose++; break;
        }

        i++;

    }

    if (coutMatch > 0) {
        winRate = win * 1.0 / coutMatch * 100;

        console.log(`${nameTeam} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${win}`);
        console.log(`## D: ${draw}`);
        console.log(`## L: ${lose}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }

}
pulseFootballTournament(["Barcelona",
    "0"])
