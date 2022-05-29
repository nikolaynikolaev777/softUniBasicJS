function pulseRenovation(input) {
    let roomHight = Number(input[0]);
    let roomWidth = Number(input[1]);
    let noColor = Number(input[2]) * 0.01;
    let inputL = input.length;
    let i = 3;

    let room = roomHight * roomWidth * 4;
    room -= room * noColor;


    while (i < inputL) {
        let curentI = input[i];

        if (curentI === "Tired!") {
            console.log(`${room} quadratic m left.`);
            break;
        }

        room -= curentI;

        if (room <= 0) {
            console.log(`All walls are painted and you have ${room -= room + room} l paint left!`)
        }

        i++;
    }

}
pulseRenovation(["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"])