function pulseCake(input) {
    let i = 2;
    let x = 0;
    let piaceCake = Number(input[0]) * Number(input[1]);

    while (i <= input.length) {
        x = input[i];

        if (piaceCake <= 0) {
            piaceCake = 0 - piaceCake;
            console.log(`No more cake left! You need ${piaceCake} pieces more.`);
            break;
        }

        if (x === "STOP") {
            console.log(`${piaceCake} pieces are left.`);
            break;
        }

        piaceCake -= x;

        i++;
    }
}
pulseCake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "25"])