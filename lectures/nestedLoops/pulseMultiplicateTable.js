function pulseMultiplicateTable() {
    let sum = 0;
    for (let m1 = 1; m1 <= 10; m1++) {
        for (let m2 = 1; m2 <= 10; m2++) {
            sum = m1 * m2;
            console.log(`${m1} * ${m2} = ${sum}`);
        }
    }
}
pulseMultiplicateTable()