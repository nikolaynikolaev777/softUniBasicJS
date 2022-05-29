function pulseWalking(input) {
    let i = 0;
    let curentI = 0;
    let sumStep = 0;
    let finalResult = Number(0);

    while (i <= input.length) {
        curentI = input[i];

        if (curentI === "Going home") {
            sumStep += Number(input[i + 1]);
            if (sumStep < 10000) {
                finalResult = 10000 - sumStep;
                console.log(`${finalResult} more steps to reach goal.`);
                break;
            }
        }

        if (sumStep >= 10000) {
            finalResult = sumStep - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${finalResult} steps over the goal!`);
            break;
        }

        sumStep += Number(curentI);

        i++;
    }
}
pulseWalking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])
