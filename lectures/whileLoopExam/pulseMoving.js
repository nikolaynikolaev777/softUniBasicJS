function pulseMoving(input) {
    let freeSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let i = 3;
    let curentI = 0;

    while (i <= input.length) {
        curentI = input[i];

        if (freeSpace <= 0) {
            freeSpace = 0 - freeSpace;
            console.log(`No more free space! You need ${freeSpace} Cubic meters more.`);
            break;
        }

        if (curentI === "Done") {
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }
        freeSpace -= curentI;
        i++;
    }

}
pulseMoving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])