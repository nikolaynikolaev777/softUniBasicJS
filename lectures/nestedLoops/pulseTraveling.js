function pulseTraveling(input) {
    let i = 0;
    let cmd = input[i];
    i++;

    while (cmd !== "End") {
        let destination = cmd;
        let budget = Number(input[i]);
        i++;
        let tempSum = 0;

        while (tempSum < budget) {
            let money = Number(input[i]);
            i++;

            tempSum += money;
        }

        console.log(`Going to ${destination}!`);
        cmd = input[i];
        i++;
    }
}
pulseTraveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
