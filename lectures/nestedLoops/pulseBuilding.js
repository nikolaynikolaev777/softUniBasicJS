function pulseBuilding(input) {
    let level = Number(input[0]);
    let rooms = Number(input[1]);
    let x = 0;

    for (let y = level; y > 0; y--) {
        let type = "";
        for (x = 0; x < rooms; x++) {
            if (y === level) {
                type += "L" + y + x + " ";
            } else if (y % 2 == 0) {
                type += "O" + y + x + " ";
            } else {
                type += "A" + y + x + " ";
            }
        }
        console.log(type);
    }
}
pulseBuilding(["9", "5"])
